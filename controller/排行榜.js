app.controller("Ctr3",function($scope,$http,$timeout){
	$http.get("data/phb.json").success(function(data){
		$scope.obj3 = data;
	})
	$timeout(function(){
		$scope.myIscoll = new IScroll(".main");
	},200)
})
