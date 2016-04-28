var ServiceGetPortefeuilles = function () {

    var url;

    this.initialize = function (serviceURL) {
        url = serviceURL ? serviceURL : "http://127.0.0.1/gsb_services/";
    }

    this.getPortefeuillesUser = function (idUser) {

        /*
        return $.ajax({
            url: url + "/demandes_devis.php",
            type: "GET",
            dataType: "json",
            data: {
                vendeur: idVendeur
            }
        });*/

        var service = new ClassePortefeuilles();
        return service.portefeuilles;
    }
}


var ServiceGetContenuPortefeuilles = function () {

    var url;

    this.initialize = function (serviceURL) {
        url = serviceURL ? serviceURL : "http://127.0.0.1/gsb_services/";
    }

    this.getPortefeuillesDetail = function (idPort) {

        /*
        return $.ajax({
            url: url + "/demandes_devis.php",
            type: "GET",
            dataType: "json",
            data: {
                vendeur: idVendeur
            }
        });*/

        var service = new ClassePortefeuilles();
        return service.actions;
    }
}

var ServiceGetAlertes = function () {

    var url;

    this.initialize = function (serviceURL) {
        url = serviceURL ? serviceURL : "http://127.0.0.1/gsb_services/";
    }

    this.getAlertes = function (idUser) {

        /*
        return $.ajax({
            url: url + "/demandes_devis.php",
            type: "GET",
            dataType: "json",
            data: {
                vendeur: idVendeur
            }
        });*/

        var service = new ClassePortefeuilles();
        return service.alertes;
    }
}