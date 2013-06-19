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
function SiteCtrl ($scope){
    $scope.settingsPanel = false;
    $scope.geocities = false;
    $scope.geoOn = false;
    $scope.geoOff = true;
    $scope.showSettings = function(show){
        $scope.settingsPanel = show;
    }
    //Geocities Mode
    $scope.geocitiesMode = function(geoOn, geoOff){
        $scope.geocities = geoOn;
        $scope.geoOn = geoOn;
        $scope.geoOff = geoOff;
    }
}