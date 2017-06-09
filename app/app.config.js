angular.
    module('photohubApp').
    config(['$locationProvider','$routeProvider', 
        function config($locationProvider, $routeProvider){
            $locationProvider.hashPrefix('');

            $routeProvider.
                when('/',{
                    template: '<navbar></navbar>'+
                              '<home></home>'
                }).
                when('/login',{
                    template: '<navbar></navbar>'+
                              '<login></login>'
                }).
                when('/register',{
                    template: '<navbar></navbar>'+
                              '<register></register>'
                }).
                when('/photographers', {
                    template: '<navbar></navbar>'+
                              '<photographer-list></photographer-list>'
                }).
                when('/photographers/:photographersId', {
                    template: '<div>ID not added</div>'
                }).
                otherwise('/login');
        }
    ]);