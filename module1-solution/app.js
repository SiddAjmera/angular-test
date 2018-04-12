(function(){

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController)

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
$scope.names="";
$scope.arr=[];
$scope.flag=0;
$scope.check=function(){
	if($scope.names.length==0)
	{
		$scope.flag=1;
	}
$scope.arr=$scope.names.split(',');
if($scope.arr.length<=3)
{
$scope.flag=2;
}
else
{
	$scope.flag=3;
}

}

};





})();