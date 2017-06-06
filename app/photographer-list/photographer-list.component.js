angular.
    module('photographerList').
    component('photographerList',{
        templateUrl: 'photographer-list/photographer-list.template.html',
        controller: ['$http',
            function photographerListController($http){
                var self = this;
                self.orderProp = 'experience';
                
                $http.get('photographers/photographers.json').then(function(response){
                    self.photographers = response.data;
                });
                
            }
        ]
    });
