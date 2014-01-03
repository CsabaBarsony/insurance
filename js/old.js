function CartController($scope) {
	$scope.inputText = "init";
	$scope.inputNumber = 0;
	$scope.double = false;
	$scope.sum = function(){
		var sum = 0;
		for(var i = 0; i < $scope.items.length; i++){
			var item = $scope.items[i];
			var sumPrice = item.price * item.quantity;
			sum += item.double ? sumPrice * 2 : sumPrice;
		}
		return sum;
	};
	$scope.items = [
		{ title: "Paint pots", quantity: 8, price: 3, double: false },
		{ title: "Polka dots", quantity: 17, price: 12, double: true },
		{ title: "Pebbles", quantity: 5, price: 6, double: true }
	];
	$scope.remove = function(index) {
		$scope.items.splice(index, 1);
	};
	$scope.add = function(){
		$scope.items.push(
			{
				title: $scope.inputText,
				quantity: $scope.inputNumber,
				price: 100,
				double: $scope.double
			}
		);
	};
	$scope.getEndPrice = function(price, double){
		return double ? price * 2 : price;
	}
}