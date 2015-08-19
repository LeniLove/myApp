angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, Chats, Units, Cities) {
   $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + Cities.get() + "&lang=es&units=" + Units.get()).success(function (data) {
      Chats.set(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.city = data.city.name;
      });
    $scope.doRefresh = function() {
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + Cities.get() + "&lang=es&units=" + Units.get()).success(function (data) {
      Chats.set(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.chats = Chats.all();
      $scope.city = data.city.name;
     })
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }
})

.controller('ChatsCtrl', function($scope, $http, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.weatherToday = Chats.get($stateParams.chatId);
})

.controller('horasCtrl', function($scope, $http, Chats, Units, Cities) {
  $http.get("http://api.openweathermap.org/data/2.5/forecast/?q=" + Cities.get() + "&lang=es&units=" + Units.get()).success(function (data) {
    Chats.set(data.list);
    $scope.chats = Chats.all();
  });
})

.controller('horasDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.weatherToday = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, Units, Cities) {
  $scope.celcius = function(){
      Units.set("metric");
  }
  $scope.fahrenheit = function(){
      Units.set("imperial");
  }
  $scope.kelvin = function(){m
      Units.set("kelvin");
  }
  $scope.cancun = function(){
      Cities.set("cancun");
  }
  $scope.merida = function(){
      Cities.set("merida");
  }
})

.controller('GradosCtrl', function($scope, Units) {
  $scope.celcius = function(){
      Units.set("metric");
  }
  $scope.fahrenheit = function(){
      Units.set("imperial");
  }
  $scope.kelvin = function(){
      Units.set("kelvin");
  }
})

.controller('CiudadesCtrl', function($scope, Cities) {
  $scope.cancun = function(){
      Cities.set("cancun");
  }
  $scope.merida = function(){
      Cities.set("merida");
  }
  $scope.guadalajara = function(){
      Cities.set("guadalajara");
  }
   $scope.chetumal = function(){
      Cities.set("chetumal");
  }
   $scope.mexico = function(){
      Cities.set("México");
  }
   $scope.chihuahua = function(){
      Cities.set("chihuahua");
  }
});
