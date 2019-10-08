var app = angular.module('app', []);
    app.filter('surfix', function(){
        return function(text){
            return text.concat('------by Frank');
        }
    });
