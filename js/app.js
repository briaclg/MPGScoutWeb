 var app = angular.module('MyApp', ["ngRoute", "ejangular"]);
    app.config(function($routeProvider){
        $routeProvider
        .when("/login", {
            templateUrl: "login.html",
            controller: "LoginController"
        })
        .when("/accueil", {
            templateUrl: "accueil.html",
            controller: "AccueilController"
        })
        .otherwise({redirectTo:"/login"});
    });

    app.factory('User', function() {
        var savedEmail = {}
        var savedPassword = {}
        var savedId = {}

        // Au moment du login, on set l'email et le password
        function set(email,password) {
            savedEmail = email;
            savedPassword = password;
        }

        // Permet de récuperer l'utilisateur qui se connecte
        function setId(id) {
            savedId = id;
        }

        // Retourne l'email
        function getEmail() {
            return savedEmail;
        }

        // Retourne le mot de passe
        function getPassword() {
            return savedPassword;
        }

        // Permet de récuperer l'utilisateur qui se connecte
        function getId() {
            return savedId
        }
       
        return {
         set: set,
         setId: setId,
         getEmail: getEmail,
         getPassword: getPassword,
         getId: getId,
        }
       
       });

       app.factory('Data', function() {
        
        var globalDataframe = {}

        // Au moment du login, on set l'email et le password
        function setDataframe(data) {
            globalDataframe = data;
        }

        function getDataframe() {
            return globalDataframe;
        }
    
        return {
         setDataframe: setDataframe,
         getDataframe: getDataframe
        }
       
       });

