var loginTpl = Handlebars.compile($("#login-tpl").html());
var homeTpl = Handlebars.compile($("#home-tpl").html());
var detailPortTpl = Handlebars.compile($("#detail-port-tpl").html());
var alertesTpl = Handlebars.compile($("#alertes-tpl").html());
var userTpl = Handlebars.compile($("#profile-tpl").html());


var LoginView = function(){
   $('body').html(loginTpl());
};

var HomeView = function(){
   // on doit récupérer les portefeuilles de l'utilisateur
   var service = new ServiceGetPortefeuilles();
   service.initialize();

   var lesP = service.getPortefeuillesUser(1);
   var context = { listePortefs : lesP };

   $('body').html(homeTpl(context));
};

var DetailPortView = function(portID){
   // on doit récupérer les portefeuilles de l'utilisateur
   var service = new ServiceGetContenuPortefeuilles();
   service.initialize();

   var lesA = service.getPortefeuillesDetail(1);
   var context = { nomPortefeuille:'mon premier portefeuille', listeActions : lesA };

   $('body').html(detailPortTpl(context));
};

var AlertesListView = function(portID){
   // on doit récupérer les portefeuilles de l'utilisateur
   var service = new ServiceGetAlertes();
   service.initialize();

   var lesA = service.getAlertes(1);
   var context = { listeAlertes : lesA };

   $('body').html(alertesTpl(context));
};

var UserView = function(){
   $('body').html(userTpl());
};