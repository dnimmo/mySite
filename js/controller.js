function WorkCtrl ($scope) {
    $scope.works = [
    	//Fur & Feathers
        { name: 'fur & feathers',
        description: 'An animal training and behaviour service in Newcastle Upon Tyne. Websites in this industry tend to be fairly poor in my experience, and there is no reason for this to be the case.', url: 'http://www.furandfeatherstraining.com', urlText: 'furandfeatherstraining.com'},
        //Osborn Contracts
        { name: 'Osborn Contracts',
        description: 'A building refurbishment company based in Cornhill, London', url: 'http://www.osborncontracts.com', urlText: 'osborncontracts.com'},
        //Generic
        { name: 'Some Other Site',
        description: 'Some Other Site, somewhere', url: '#', urlText: 'somewhere.com'}
        ];
}

//Show settings bar on click
function FooterCtrl ($scope, $rootScope){
    $scope.settings = false;
    $scope.showSettings = function(){
        $scope.settings = true;
    }
    $scope.hideSettings = function(){
        $scope.settings = false;
    }

    //Geocities Mode
    $rootScope.geocities = false;
    $rootScope.geocitiesModeOn = function(){
        $rootScope.geocities = true;
    }
    $rootScope.geocitiesModeOff = function(){
        $rootScope.geocities = false;
    }
}


function List ($scope){
    $scope.people = [
        {name: "David", age: 28},
        {name: "Victoria", age: 24},
        {name: "Dante", age: 1},
        {name: "Juri", age: 1},
        {name: "Aeris", age: 8},
        {name: "Nadia", age: 9}
    ];

    $scope.add = function () {
        $scope.people.push({
            name: $scope.new_name,
            age: $scope.new_age
        });
        $scope.new_name="";
        $scope.new_age="";
    };

    $scope.remove = function(index){
        $scope.people.splice(index, 1);
    }
};

