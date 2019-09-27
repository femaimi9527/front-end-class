    // 评论功能控制器
    app.controller('commentController',['$scope',function($scope){
        // 这是创建一个空数组的意思？
        $scope.commentArr = [];
        //评论功能
        $scope.submitComment = function (comt) {
            $scope.commentArr.push(comt);
            $scope.comt = '';
        };
        // 删除评论
        $scope.deleteComment = function (index) {
            console.log(index);
        //删除元素的两种办法：
            // 第1种：最原始的办法，删除指定的元素
            $scope.commentArr.splice(index, 1);
            // 第2种：弊端：如果有重复元素，则会全删掉了
            // _.without($scope.commentArr,$scope.commentArr[index]); 
        };
    }]);
    
    