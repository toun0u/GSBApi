/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

    },

    loginView: new LoginView()

};

app.initialize();

$('body').on('click', '.bt_connex', function () {
        homeView: new HomeView();
        /*
        var connecte = service.authentification($('.login').val(), $('.motdepasse').val())
        if (connecte) {
            // on va chercher les demandes du jour via l'appel PHP
            // quand l'appel est terminé correctement, on déclenche une fonction qui reçoit les demandes en paramètre
            serviceDevis.getDevisJour(1).done(function (demandes) {
                // on log le contenu de la variable pour info
                console.log(demandes);
                // on déclenche l'affichage du template à partir des demandes et de l'utilisateur courant
                renderHomePage($('.login').val(), demandes);
                // On masque toutes les DIV detailDemandeXX
                $('[id^=detailDemande').hide();
                // On ajoute la fonction qui traite le clic sur uneDemande
                $('[id^=uneDemande').on('click', function () {
                    // On cache tous les détails des demandes
                    $('[id^=detailDemande').hide();
                    // on récupére le code de la demande sélectionnée
                    var numero = (this.id).substring(10);
                    // on affiche la DIV de la demande sélectionnée
                    $('#detailDemande'+numero).show();
                    //alert("clic sur une demande" + numero);
                });
            });
            
        } else {
            $('.erreur_msg').append("Erreur de login");
        }
        /*
        if (($('.login').val() == 'toto') && ($('.motdepasse').val() == 'azerty')) {
            alert('ok');
            renderHomePage();
        }else{
            alert('KO');
            $('.erreur_msg').append("Erreur de login");
        }
        */
    });

$('body').on('click', '.unPortef', function () {
        var numeroPortefeuille = jQuery(this).attr("id");
        detailPortView: new DetailPortView(numeroPortefeuille);
    });

$('body').on('click', '.icon-close', function () {
    var t = navigator;

        navigator.notification.confirm(
            'Do you really want to exit?',  // message
            exitFromApp,              // callback to invoke with index of button pressed
            'Exit',            // title
            'Cancel,OK'         // buttonLabels
        );
    });

    
    function exitFromApp(buttonIndex) {

      if (buttonIndex==2){
       navigator.app.exitApp();
        }
    };

$('body').on('click', '.icon-home', function () {
        homeView: new HomeView();
    });

$('body').on('click', '.icon-search', function () {
        alertListView: new AlertesListView(1);
    });

$('body').on('click', '.icon-person', function () {
        userView: new UserView();
    });

$('body').on('click', '.retour', function () {
        homeView: new HomeView();
    });

$('body').on('click', '.deco', function () {
        loginView: new LoginView();
    });