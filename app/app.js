var photohubApp = angular.module('photohubApp',[]);

photohubApp.controller('PhotographerListController', function PhotographerListController($scope){
        $scope.photographers = [
            {
                name: 'Krishna Sagar',
                snippet: 'capture the moments',
                experience: '6+ years'
            },
            {
                name: 'Kiran Kandagal',
                snippet: 'hire me or fire me',
                experience: '3 months'
            },
            {
                name: 'Suraj Anthony',
                snippet: 'give the best',
                experience: '1 year'
            }

        ];
    });