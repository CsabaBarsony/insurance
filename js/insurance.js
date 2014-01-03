function OfferController($scope){
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

	$scope.plant = $scope.plants[0];
	$scope.area = 2;
	$scope.render = 3;
	$scope.unitPrice = 4;
	$scope.hail = true;
	$scope.frost = false;
	$scope.offers = [];

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

	$scope.getProductValue = function($index){
		var offer = $scope.offers[$index];
		return offer.render * offer.unitPrice;
	};

	$scope.getInsuranceValue = function($index){
		var offer = $scope.offers[$index];
		return offer.area * $scope.getProductValue($index);
	};

	$scope.getHailFee = function($index){
		var offer = $scope.offers[$index];
		if(!offer.hail)
			return 0;
		else
			return offer.plant.hailFactor * $scope.getInsuranceValue($index) / 100;
	};

	$scope.getFrostFee = function($index){
		var offer = $scope.offers[$index];
		if(!offer.frost)
			return 0;
		else
			return offer.plant.frostFactor * $scope.getInsuranceValue($index) / 100;
	}

	$scope.getSumPrice = function($index){
		return $scope.getHailFee($index) + $scope.getFrostFee($index);
	};

	$scope.getSumArea = function(){
		var sum = 0;
		for(var i = 0; i < $scope.offers.length; i++){
			var item = $scope.offers[i];
			sum += item.area;
		}
		return sum;
	};

	$scope.getSumInsuranceValue = function(){
		var sum = 0;
		for(var i = 0; i < $scope.offers.length; i++){
			var item = $scope.offers[i];
			sum += item.area * item.render * item.unitPrice;
		}
		return sum;
	};

	$scope.getSumHailFee = function(){
		var sum = 0;
		for(var i = 0; i < $scope.offers.length; i++){
			var item = $scope.offers[i];
			if(item.hail)
				sum += item.plant.hailFactor * item.area * item.render * item.unitPrice / 100;
		}
		return sum;
	};

	$scope.getSumFrostFee = function(){
		var sum = 0;
		for(var i = 0; i < $scope.offers.length; i++){
			var item = $scope.offers[i];
			if(item.frost)
				sum += item.plant.frostFactor * item.area * item.render * item.unitPrice / 100;
		}
		return sum;
	};
	
	$scope.getEndPrice = function(){
		return $scope.getSumHailFee() + $scope.getSumFrostFee();
	};
}