var app=angular.module('universidadApp',[]);

app.controller('profesorCtrl',function($scope){
	
	$scope.profesor=profesorData;
	$scope.editando={};
	$scope.mostrarCaja=false;
	
	$scope.EditarProfesor=function(){
	
		angular.copy($scope.profesor,$scope.editando);
		$scope.mostrarCaja=true;
		
	}
	
	$scope.GuardarCambios=function(){
		
		angular.copy($scope.editando,$scope.profesor);
		$scope.mostrarCaja=false;
		
	}
	
	$scope.CancelarCambios=function(){
		
		$scope.editando={};
		$scope.mostrarCaja=false;
		
	}
	
	/*
	this.profesor={
	
	nombre:"Javier Prada",
	bio:"Saludos estudiantes,mi nombre es Javier, encantado de conoceros",
	edad:40,
	foto:"IMG/javi.jpeg"
	}
	*/
	
	
});


(function(){
	var app=angular.module('universidadApp',[]);
	
	app.controller('listadoCtrl',['$scope',function($scope){
		
		$scope.listado=["Juanmita","Adriansito","Fernandito"];
		
	}]);
	
})();

	