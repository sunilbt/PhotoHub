angular.
    module('photohubApp').
    config(['$locationProvider','$routeProvider', 
        function config($locationProvider, $routeProvider){
            $locationProvider.hashPrefix('');

            $routeProvider.
                when('/login',{
                    template: '<navbar></navbar>'+
                              '<login></login>'
                }).
                when('/photographers', {
                    template: '<navbar></navbar>'+
                              '<photographer-list></photographer-list>'
                }).
                when('/photographers/:photographersId', {
                    template: '<div>ID not added</div>'
                }).
                otherwise('/photographers');
        }
    ]);