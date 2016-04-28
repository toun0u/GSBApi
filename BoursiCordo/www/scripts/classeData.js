var ClasseData = function () {

    this.initialize = function () {
        // No Initialization required     
    }

    this.salaries = [
        { "id": 1, "nom": "James", "prenom": "Bond", "mdp": "azerty" },
        { "id": 2, "nom": "Albert", "prenom": "Taud", "mdp": "azerty" },
        { "id": 3, "nom": "Luc", "prenom": "King", "mdp": "azerty" },
        { "id": 4, "nom": "Julie", "prenom": "Quenn", "mdp": "azerty" },
        { "id": 5, "nom": "Lucienne", "prenom": "Champion", "mdp": "azerty" },
    ];

}

ClasseData.prototype.findById = function (id) {
            var employes = null;
            var l = this.salaries.length;
            for (var i = 0; i < l; i++) {
                if (this.salaries[i].id === id) {
                    employes = this.salaries[i];
                    break;
                }
            }
            return employes;
}

ClasseData.prototype.findByName = function (searchKey) {
            //var deferred = $.Deferred();  
            var results = this.salaries.filter(function (element) {
                var fullName = element.nom + " " + element.prenom;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            //deferred.resolve(results);
            //return deferred.promise();
            return results;
}

ClasseData.prototype.authentification = function (log, mdp) {
            var employee = null;
            var l = this.salaries.length;
            var connecte = false;
            for (var i = 0; i < l; i++) {
                var chaine = this.salaries[i].nom + " " + this.salaries[i].prenom;
                if ((chaine == log) && (mdp == this.salaries[i].mdp)) {
                    connecte = true;
                    break;
                }
            }
            return connecte;
}

/*
var ClasseData = function () {

    this.initialize = function () {
        // No Initialization required

        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();

    }

    this.findById = function (id) {
        var deferred = $.Deferred();
        var employee = null;
        var l = salaries.length;
        for (var i = 0; i < l; i++) {
            if (salaries[i].id === id) {
                employee = salaries[i];
                break;
            }
        }
        deferred.resolve(employee);
        return deferred.promise();
    }

    this.findByName = function (searchKey) {
        var deferred = $.Deferred();
        var results = salaries.filter(function (element) {
            var fullName = element.nom + " " + element.prenom;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();
    }

    this.authentification = function (log, mdp) {
        var employee = null;
        var l = salaries.length;
        var connecte = false;
        for (var i = 0; i < l; i++) {
            var chaine = salaries[i].nom + " " + salaries[i].prenom;
            if ((chaine == log) && (mdp == salaries[i].mdp)) {
                connecte = true;
                break;
            }
        }
        return connecte;
    }

    var salaries = [
        { "id": 1, "nom": "James", "prenom": "Bond", "mdp": "azerty" },
        { "id": 2, "nom": "Albert", "prenom": "Taud", "mdp": "azerty" },
        { "id": 3, "nom": "Luc", "prenom": "King", "mdp": "azerty" },
        { "id": 4, "nom": "Julie", "prenom": "Quenn", "mdp": "azerty" },
        { "id": 5, "nom": "Lucienne", "prenom": "Champion", "mdp": "azerty" },
    ];

}
*/
/*var ClasseData = function () {

    this.initialize = function () {
        // No Initialization required     
    }

    this.findById = function (id) {
        var employes = null;
        var l = salaries.length;
        for (var i = 0; i < l; i++) {
            if (salaries[i].id === id) {
                employes = salaries[i];
                break;
            }
        }
        return employes;
    }

    this.findByName = function (searchKey) {
        //var deferred = $.Deferred();  
        var results = salaries.filter(function (element) {
            var fullName = element.nom + " " + element.prenom;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        //deferred.resolve(results);
        //return deferred.promise();
        return results;
    }

    this.authentification = function (log, mdp) {
        var employee = null;
        var l = salaries.length;
        var connecte = false;
        for (var i = 0; i < l; i++) {
            var chaine = salaries[i].nom + " " + salaries[i].prenom;
            if ((chaine == log)&&(mdp == salaries[i].mdp)) {
                connecte = true;
                break;
            }
        }
        return connecte;
    }

    var salaries = [
        { "id": 1, "nom": "James", "prenom": "Bond", "mdp": "azerty" },
        { "id": 2, "nom": "Albert", "prenom": "Taud", "mdp": "azerty" },
        { "id": 3, "nom": "Luc", "prenom": "King", "mdp": "azerty" },
        { "id": 4, "nom": "Julie", "prenom": "Quenn", "mdp": "azerty" },
        { "id": 5, "nom": "Lucienne", "prenom": "Champion", "mdp": "azerty" },
    ];

}
*/