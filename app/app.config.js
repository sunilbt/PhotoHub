angular.
    module('photohubApp').
    config(['$locationProvider','$routeProvider', 
        function config($locationProvider, $routeProvider){
            $locationProvider.hashPrefix('');

            $routeProvider.
                when('/photographers', {
                    template: '<photographer-list></photographer-list>'
                }).
                when('/photographers/:photographersId', {
                    template: '<div>ID not added</div>'
                }).
                otherwise('/photographers');
        }
    ]);