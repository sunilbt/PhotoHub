angular.
    module('register').
    component('register',{
        templateUrl: 'register/register.template.html',
        controller: ['UserService', '$location', '$rootScope', 'FlashService',
            function RegsiterController(UserService, $location, $rootScope, FlashService){
                console.log('Register Controller Initiated');
                var vm = this;
                vm.register = register;
        
                function register() {
                    vm.dataLoading = true;
                    UserService.Create(vm.user)
                        .then(function (response) {
                            if (response.success) {
                                FlashService.Success('Registration successful', true);
                                $location.path('/login');
                            } else {
                                FlashService.Error(response.message);
                                vm.dataLoading = false;
                            }
                        });
                }
            }
        ]
    });