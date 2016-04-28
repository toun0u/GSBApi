var ServiceDemandeDevis = function () {

    var url;

    this.initialize = function (serviceURL) {
        url = serviceURL ? serviceURL : "http://127.0.0.1/gsb_services/";
    }

    this.getDevisJour = function (idVendeur) {
        return $.ajax({
            url: url + "/demandes_devis.php",
            type: "GET",
            dataType: "json",
            data: {
                vendeur: idVendeur
            }
        });
    }
}