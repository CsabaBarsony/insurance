function OfferController($scope){
	$scope.plant = "";
	$scope.area = 2;
	$scope.render = 3;
	$scope.unitPrice = 4;
	$scope.hail = true;
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
				plant: $scope.plant,
				area: $scope.area,
				render: $scope.render,
				unitPrice: $scope.unitPrice,
				hail: $scope.hail,
				frost: $scope.frost
			}
		);
	};
	$scope.getProductValue = function(render, unitPrice){
		return render * unitPrice;
	};
	$scope.getInsuranceValue = function(area, render, unitPrice){
		return $scope.getProductValue(render, unitPrice) * area;
	};
}