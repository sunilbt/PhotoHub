angular.
    module('photographerList').
    component('photographerList',{
        templateUrl: 'photographer-list/photographer-list.template.html',
        controller: ['$http',
            function photographerListController($http){
                var self = this;
                self.orderProp = 'experience';
                    
                self.options = [
                    {
                        name: 'Kids',
                        selected: false
                    }, {
                        name: 'Candid',
                        selected: false
                    }, {
                        name: 'Short Films',
                        selected: false
                    }, {
                        name: 'Events',
                        selected: false
                    }, {
                        name: 'Concept',
                        selected: false
                    }, {
                        name: 'Wedding',
                        selected: false
                    }
                ];

                self.itemFilter = function(item){
                    var filters = self.options.filter(function(element, idx, array){
                        return element.selected;
                    }) || [];

                    var matched = true;
                    filters.forEach(function(option){
                        matched = matched && item.category.indexOf(option.name) >= 0;
                    });

                    return matched;                    
                }

                $http.get('photographers/photographers.json').then(function(response){                    
                    self.photographers = response.data;                    
                });
                                

            }
        ]
    });
