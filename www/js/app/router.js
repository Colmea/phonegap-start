define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),
        PageSlider  = require('app/utils/pageslider'),
        LoginView    = require('app/views/Login'),
        HomeView    = require('app/views/Home'),

        slider = new PageSlider($('body')),

        loginView = new LoginView(),
        homeView = new HomeView();

    return Backbone.Router.extend({

        routes: {
            "": "login",
            "home": "home",
            "beers/:id": "beerDetails",
            "manufacturers/:id": "manufacturerDetails",
        },

        login: function () {
            loginView.delegateEvents();
            slider.slidePage(loginView.$el);
        },

        home: function () {

            require(["app/views/Home"], function (HomeView) {
                slider.slidePage(new HomeView({ el: $(".page-center", this.el)}).$el);
            });
        },

        employeeDetails: function (id) {
            require(["app/models/employee", "app/views/Employee"], function (models, EmployeeView) {
                var employee = new models.Employee({id: id});
                employee.fetch({
                    success: function (data) {
                        slider.slidePage(new EmployeeView({model: data}).$el);
                    }
                });
            });
        },

        reports: function (id) {
            require(["app/models/employee", "app/views/Reports"], function (models, ReportsView) {
                var employee = new models.Employee({id: id, access_token: token.access_token});


                employee.fetch({
                    data: {access_token: token.access_token},

                    success: function (data) {
                        slider.slidePage(new ReportsView({model: data}).$el);
                    }
                });
            });
        },

        beerDetails: function (id) {
            console.log('beerdetail');
            require(["app/models/beer", "app/views/Beer"], function (models, BeerView) {
                var beer = new models.Beer({id: id});
                beer.fetch({
                    data: {access_token: token.access_token},

                    success: function (data) {
                        slider.slidePage(new BeerView({model: data}).$el);
                    }
                });
            });
        },

        manufacturerDetails: function (id) {
            console.log('manufacturer detail for id ' + id);
            require(["app/models/manufacturer", "app/views/Manufacturer"], function (models, ManufacturerView) {
                var manufacturer = new models.Manufacturer({id: id});
                manufacturer.fetch({
                    success: function (data) {
                        slider.slidePage(new ManufacturerView({model: data}).$el);
                    }
                });
            });
        },

    });

});