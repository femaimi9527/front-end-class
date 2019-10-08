// 名称列表控制器
app.controller('nameListController', ['$scope','$filter', function ($scope,$filter) {
    $scope.liInfoList = [
        'frank',
        '测试下第一种filter功能{{money | currency:￥}}',
        '{{liInfo}}看来显示失败呀',
        'lucy',
        'hanMeiMei',
        'Tom',
        'liLei',
        'alan',
        'rihanna',
        'bob', 
        'kobe',
        'branyt',
        'jimmy',
        'atonny',
        '也支持中文过滤哦',
        '我和我的祖国',
        '国庆快乐！',
        '李小龙',
        '9527',
        '8848',
        '嗯168',
        '列表展示筛选功能',
        '最后一个啦'];
    
}]);