define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        DrunkBeerListView   = require('app/views/DrunkBeerList'),
        SelectBeerListView  = require('app/views/SelectDrinkBeer'),
        models              = require('app/models/drunkBeer'),
        beerModels          = require('app/models/beer'),
        tpl                 = require('text!tpl/Home.html'),
        Vent                = require('EventBus'),

        template = _.template(tpl);


    return Backbone.View.extend({


        initialize: function () {
            this.drunkBeerList = new models.DrunkBeerCollection();
            this.selectDrinkBeerList  = new beerModels.BeerCollection();

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
            this.listView = new DrunkBeerListView({collection: this.drunkBeerList, el: $("#container-content", this.el)});

            //Move modal new drunk beer at the end of body
            //$('#modalNewDrunkBeer').appendTo("body");

            return this;
        },

        events: {
           "click #button-scan": "scan",
           "click #button-new-drink": "drinkBeer",
           "click #page-drink-beer": "pageSelectDrinkBeer"
        },

        drinkBeer: function(event) {
            $("#modalNewDrunkBeer").modal({
                backdrop: false,
                keyboard: true
            });


            $("#modalNewDrunkBeer").modal("show");
            $("#modalNewDrunkBeer").css("z-index", "1500");
        },

        pageSelectDrinkBeer: function(event) {
            $("#modalNewDrunkBeer").modal("hide");

            $(this.el).html(template());
            this.listView = new SelectBeerListView({collection: this.selectDrinkBeerList, el: $("#container-content", this.el)});
        },

        scan: function(event) {

            console.log('scand barecode');

            var scanner = cordova.require("cordova/plugin/BarcodeScanner");

            scanner.scan(
              function (result) {
                  alert("Code barre reconnu\n" +
                        "Résultat: " + result.text + "\n" +
                        "Format: " + result.format + "\n" +
                        "Annulé: " + result.cancelled);
              },
              function (error) {
                  alert("Erreur lors du scan: " + error);
              }
           );
        }

    });

});
