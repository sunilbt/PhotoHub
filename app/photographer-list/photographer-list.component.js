angular.
    module('photographerList').
    component('photographerList',{
        templateUrl: 'photographer-list/photographer-list.template.html',
        controller: ['$http', '$scope',
            function photographerListController($http, $scope){
                var self = this;
                self.orderProp = 'experience';


                self.photographers = [];

                $http.get('photographers/photographers.json').then(function(response){                    
                    self.photographers = response.data;      
                    $scope.totalItems = self.photographers.length;              
                });
                

                $scope.viewby = 10;
                $scope.currentPage = 4;
                $scope.itemsPerPage = $scope.viewby;
                $scope.maxSize = 5; //Number of pager buttons to show

                $scope.setPage = function (pageNo) {
                    $scope.currentPage = pageNo;
                };

                $scope.pageChanged = function() {
                    console.log('Page changed to: ' + $scope.currentPage);
                };

                $scope.setItemsPerPage = function(num) {
                $scope.itemsPerPage = num;
                $scope.currentPage = 1; //reset to first paghe
                }

                self.options = [
                    {
                        name: 'Kids',
                        selected: false
                    }, {
                        name: 'Candid',
                        selected: false
                    }, {
                        name: 'Concept',
                        selected: false
                    }, {
                        name: 'Corporate Films',
                        selected: false
                    }, {
                        name: 'Documentary Films',
                        selected: false
                    }, {
                        name: 'Events',
                        selected: false
                    }, {
                        name: 'Fashion',
                        selected: false
                    }, {
                        name: 'Portfolio',
                        selected: false
                    }, {
                        name: 'Product',
                        selected: false
                    }, {
                        name: 'Short Films',
                        selected: false
                    }, {
                        name: 'Weddings',
                        selected: false
                    }
                ];

                self.languages = [{
                        name: 'English',
                        selected: false
                    },{
                        name: 'Hindi',
                        selected: false
                    },{
                        name: 'Kannada',
                        selected: false
                    },{
                        name: 'Tamil',
                        selected: false
                    },{
                        name: 'Telugu',
                        selected: false
                    },{
                        name: 'Malayalam',
                        selected: false
                    }, {
                        name: 'Gujarathi',
                        selected: false
                    }
                ];

                self.genders = ["Female","Male","Others"];

                $scope.sliderPrice = {
                    min: 1000,
                    max: 300000,
                    options: {
                         showSelectionBar: true,
                         getSelectionBarColor: function(value) {
                                                return 'red';
                                            },
                        ceil: 300000,
                        floor: 0,
                        translate: function(value){
                            return '₹.'+ value;
                        }
                    }
                };

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

                        
            }
        ]
    });
