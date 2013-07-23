function WorkCtrl ($scope) {
    $scope.works = [
    	//Fur & Feathers
        { name: 'fur & feathers',
        description: 'An animal training and behaviour service in Newcastle Upon Tyne. Websites in this industry tend to be fairly poor in my experience, and there is no reason for this to be the case.', url: 'http://www.furandfeatherstraining.com', urlText: 'furandfeatherstraining.com', preview: 'img/fandfmob.png', big: 'img/fandfbig.png'},
        //Osborn Contracts
        { name: 'Osborn Contracts',
        description: 'A building refurbishment company based in Cornhill, London', url: 'http://www.osborncontracts.com', urlText: 'osborncontracts.com'},
        //Generic
        { name: 'Some Other Site',
        description: 'Some Other Site, somewhere', url: '#', urlText: 'somewhere.com'}
        ];
}

//Show settings bar on click
function SiteCtrl ($scope){
    $scope.settingsPanel = false;
    $scope.geocities = false;
    $scope.geoOn = false;
    $scope.geoOff = true;
    $scope.extra = false;
    $scope.showSettings = function(show){
        $scope.settingsPanel = show;
    }
    //Geocities Mode
    $scope.geocitiesMode = function(geoOn, geoOff){
        $scope.geocities = geoOn;
        $scope.geoOn = geoOn;
        $scope.geoOff = geoOff;
    }
    //Show expanded images
    $scope.showExpanded = function(setting){
        $scope.expanded = setting;
        $scope.preview = setting;
    }
    $scope.showExtraInfo = function(showExtraInfo){
        $scope.extra = showExtraInfo;
    }
}

/*Angular Practice stuff for /angular */

var FirstController = function ($scope){
    $scope.name = "David Nimmo";
    $scope.age = 28;
    $scope.$watch('name', function(){
      console.log($scope.name);
    });
};

var SecondController = function ($scope){
    $scope.name = "Jonny Hamilton";
    $scope.age = 24;
};

var ListController = function($scope){
    $scope.names = ["Paul", "Muriel", "Ian", "Liam", "Mark", "Ian", "Dave", "Glenn", "Jez", "Shameek", "The rest of you"];
    $scope.people = [{name: "Paul", gender: "Boy"},
                     {name: "Muriel", gender: "Girl"},
                     {name: "Ian", gender: "Boy"},
                     {name: "Liam", gender: "Unknown"}, 
                     {name: "Mark", gender: "Boy"},
                     {name: "Ian", gender: "Boy"},
                     {name: "Dave", gender: "Boy"},
                     {name: "Glenn", gender: "Boy"}, 
                     {name: "Jez", gender: "Boy"},
                     {name: "Shameek", gender: "Boy"},
                     {name: "The rest of you", gender: "Assorted"}];
}