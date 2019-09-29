// 信息列表控制器
app.controller('infoListController', ['$scope', function($scope){
    $scope.infoList = [
        { name:'xiaoZhang', score:85 },
        { name:'daTong', score:72 },
        { name:'heXiaoLin', score:88 },
        { name:'liXu', score:87 },
        { name:'aoNiu', score:69 },
        { name:'dengXue', score:56 },
        { name:'keLang', score:91 },
        { name:'laiBa', score:98 },
        { name:'wanChen', score:100 }
    ];
}]);