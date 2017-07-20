app.controller("Ctrr",function($scope,$http,$timeout){
	$timeout(function(){
		$(".nav li").click(function(){
			$(this).addClass("active1").siblings().removeClass("active1")
		})
	},200)
})
