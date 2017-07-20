app.controller("Ctr",function($scope,$http,$timeout){
	$http.get("data/grtj.json").success(function(data){
		$scope.obj = data;
		$timeout(function(){
			$scope.mySwiper = new Swiper(".swiper-container",{
				loop:true,
				speed:1000,
				autoplay:500,
				pagination:".swiper-pagination"
			})
		},200)
		
	})
	$timeout(function(){
		$scope.myIscoll = new IScroll(".main");
	},200)
})
