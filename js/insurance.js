function OfferController($scope){
	$scope.plant = "";
	$scope.area = 0;
	$scope.yield = 0;
	$scope.unitPrice = 0;
	$scope.hail = false;
	$scope.frost = false;
	$scope.offers = [];
	$scope.plants = [
		{
			name: "Búza",
			code: "GAB01",
			hailFactor: 1.02,
			frostFactor: 1.5
		},
		{
			name: "Kukorica",
			code: "GAB06",
			hailFactor: 1.02,
			frostFactor: 1.55
		},
		{
			name: "Paprika",
			code: "ZOL27",
			hailFactor: 1.33,
			frostFactor: 1.62
		}
	];
	$scope.remove = function(index) {
		$scope.offers.splice(index, 1);
	};
	$scope.add = function(){
		$scope.offers.push(
			{
				//itt tartok...
			}
		);
	};
}