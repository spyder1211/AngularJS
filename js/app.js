var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'ジバニャン',
     'snippet': '猫の地縛霊',
     'image': 'img/01.jpg',
     'type': '1'
    },
    {'name': 'ぐれるリン',
     'snippet': 'ぐれる妖怪',
     'image': 'img/02.jpg',
     'type': '2'
    },
    {'name': 'コマさん',
     'snippet': '狛犬の妖怪',
     'image': 'img/03.jpg',
     'type': '3'
    },
    {'name': 'コマじろう',
     'snippet': 'コマさんの弟',
     'image': 'img/04.jpg',
     'type': '3'
    }
  ];
});
