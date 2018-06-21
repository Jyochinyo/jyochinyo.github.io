app.factory('customService',['$http', function ($http) {
        return {
            onePlus: function (info) {
                return info+"哈哈";
            },

            testValue : {key1: "value1",
                         key2: "value2"}
        }

        
}]);


app.constant('apiKey',{key1: "value1",
                         key2: "value2"});
