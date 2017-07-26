'use strict';



travelApp.controller('GuideController', function($scope, GuideFactory){
	GuideFactory.getGuides()
	.then( (guidesData) => {
		$scope.guideList = guidesData.data.guides;
        console.log("guideList", $scope.guideList);
	});
});