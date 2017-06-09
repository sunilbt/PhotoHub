angular.
    module('home').
    component('home',{
        templateUrl: 'home/home.template.html',
        controller: ['UserService', '$rootScope',
            function HomeController(UserService, $rootScope){
                var vm = this;

                vm.user = null;
                vm.allUsers = [];
                vm.deleteUser = deleteUser;

                initController();

                function initController() {
                    loadCurrentUser();
                    loadAllUsers();
                }

                function loadCurrentUser() {
                    UserService.GetByUsername($rootScope.globals.currentUser.username)
                        .then(function (user) {
                            vm.user = user;
                        });
                }

                function loadAllUsers() {
                    UserService.GetAll()
                        .then(function (users) {
                            vm.allUsers = users;
                        });
                }

                function deleteUser(id) {
                    UserService.Delete(id)
                    .then(function () {
                        loadAllUsers();
                    });
                }
            }

        ]
    });