app.controller("Ctr1",function($scope,$http,$timeout){
	$http.get("data/gd.json").success(function(data){
		$scope.obj1 = data;
	})
	$timeout(function(){
		$scope.myIscoll = new IScroll(".main");
	},200)
})
