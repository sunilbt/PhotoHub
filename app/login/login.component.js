angular.
    module('login').
    component('login',{
        templateUrl: 'login/login.template.html',
        controller: ['$scope', '$location', 'AuthenticationService','FlashService',
            function LoginController($scope, $location, AuthenticationService, FlashService){
                console.log('login controller initated');
                console.log('login controller location: ');
                
                var vm = this;
                vm.login = login;
                
                 AuthenticationService.ClearCredentials();

                function login(){
                    console.log('Userame: '+ vm.username +' Password:'+vm.password);
                    AuthenticationService.Login(vm.username, vm.password, function (response) {
                        if (response.success) {
                            AuthenticationService.SetCredentials(vm.username, vm.password);
                            $location.path('/');
                        } else {
                            FlashService.Error(response.message);
                            vm.dataLoading = false;
                        }
                    });
                    
                };
            }
        ]
    });