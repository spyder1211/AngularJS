(function(module){  // （1） 処理を即時関数内に入れる
    'use strict';          // （2） Strictモードを指定する

    module.controller('pageController',function($scope){   // （3） コントローラを作成

        // （4） 表示する要素の管理
        $scope.show = {
            list : true,
            add  : false,
            info : false
        };
    }
}(TodoModule));  // （5） モジュール変数を引数に設定
