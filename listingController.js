/* angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
  /*
    $scope.addListing = function() {};
    $scope.deleteListing = function(index) {};
    $scope.showDetails = function(index) {};
  }
]);
*/

/*
   ABOVE IS ORIGINAL GIVEN CODE

*/
angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.newListingCode = ' ';
	$scope.newListingName = ' ';
	$scope.newListingLatitude = ' ';
	$scope.newListingLongitude = ' ';
	$scope.newListingAddress = ' ';
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
	$scope.showDeleteButton = false;
	$scope.currentIndex = undefined;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
		$scope.listings.push({code:$scope.newListingCode, name:$scope.newListingName, coordinates:{latitude:$scope.newListingLatitude, longitude:$scope.newListingLongitude}, address:$scope.newListingAddress});
		$scope.newListingCode = ' ';
		$scope.newListingName = ' ';
		$scope.newListingLatitude = ' ';
		$scope.newListingLongitude = ' ';
		$scope.newListingAddress = ' ';
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
	  $scope.currentIndex = undefined;
	  $scope.showDeleteButton = false;
	  $scope.detailedInfo = undefined;
    };
    $scope.showDetails = function(index) {
		$scope.detailedInfo = $scope.listings[index];
		$scope.showDeleteButton = true;
		$scope.currentIndex = index;
	};
  }
]);
