var ClassePortefeuilles = function () {

    this.initialize = function () {
        // No Initialization required     
    }

    this.portefeuilles = [
        { "id": 1, "libelle": "Actions françaises", "montant": "5000", "variation_initiale": "5.36", "variation_veille": "1.04", "liquidites" : 950.00, "actions" : 3 },
        { "id": 2, "libelle": "Actions US", "montant": "2000", "variation_initiale": "15.36", "variation_veille": "-0.04", "liquidites" : 550.00, "actions" : 7 },
    ];

    this.actions =[
        { "ticker": 'UG', "libelle": "Peugeot", "nombre": 30, "variation_initiale": 15.31, "variation_veille": 1.04, "PRU" : 13.23, "cours" : 15.21, "montant" : 2103},
        { "ticker": 'RNO', "libelle": "Renault", "nombre": 15, "variation_initiale": 27.31, "variation_veille": 4.04, "PRU" : 78.23, "cours" : 81.21, "montant" : 578},
        { "ticker": 'SNF', "libelle": "Sanofi", "nombre": 41, "variation_initiale": -4.52, "variation_veille": -1.37, "PRU" : 71.23, "cours" : 73.20, "montant" : 1103},
    ];

    this.alertes =[
        { "ticker": 'UG', "libelle": "Peugeot", "cours" : 15.21, "alerte" : 15.00, "date": "13h45 le 15/02/2016"},
        { "ticker": 'UG', "libelle": "Peugeot", "cours" : 15.21, "alerte" : 14.80, "date": "13h45 le 15/02/2016"},
        { "ticker": 'RNO', "libelle": "Renault", "cours" : 78.00, "alerte" : 79.00, "date": "13h45 le 15/02/2016"},
    ];
}