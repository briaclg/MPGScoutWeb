app.controller('AccueilController', function($scope, $http, User, Data) {

    $scope.loading = true
    // on récupète email et password du sevice User
    var email = User.getEmail();
    var password = User.getPassword();
    var userId = User.getId();
    var globalDataframe =  {};


    // Paramètre carte info
    $scope.FRANCEMap = FranceMap;
    $scope.FRANCECITYMap = FranceCityMap;
    $scope.datasource = nombreData;
    $scope.enableSelectionBig = false;
    $scope.enableSelection = false;
    $scope.enableMouseHover = true;
    $scope.strokeThickness = "0.5";
    $scope.Fill = "#DEE2B9";
    $scope.Stroke = "White";
    $scope.highlightStroke= "White";
    $scope.highlightColor= "#BC5353";
    $scope.highlightBorderWidth= "1";
    $scope.ncolor1 = "Green";
    $scope.ncolor2 = "#9CBF4E";
    $scope.ncolor3 = "#CBD89A";
    $scope.ncolor4 = "#DEE2B9";
    

    
    // On fait le call pour récuperer la dataframe global
    $http({
        url: 'https://mpgtest.herokuapp.com/api/list',
        method: "POST",
        data: { 'email' : email,
                'password' : password }
    })
    .then(function (response){
        globalDataframe = response.data;
        // On sauvegarde dans le service Data
        Data.setDataframe(globalDataframe); 

        // Après avoir récupéré la dataframe globale, on veut celle propre à l'accueil
        $http({
            url: 'https://mpgtest.herokuapp.com/api/accueil',
            method: "POST",
            data: { 'dataframe' : globalDataframe,
                    'userId' : userId}
        }).then(function (response){
            console.log(response.data)
            $scope.loading = false;
        });

     });

     
});

