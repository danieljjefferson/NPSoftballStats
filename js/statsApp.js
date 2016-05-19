var app = angular.module("statsApp", []);

console.log("Stats App");

app.controller("BattingStatsController", function ($http) {
    console.log("Batting Stats Controller");

    var statsList = this;
    statsList.sortCol = "Name";
    statsList.sortReverse = false;
    statsList.message = "TEST";

    $http({
        method: 'GET',
        url: '../json/stats.json'
    }).then(function successCallback(response) {
        statsList.message = response.status;
        statsList.stats = new Array();
        angular.forEach(response.data, function (player) {
            statsList.stats.push(player);
        });
        console.log(statsList.stats);
    }, function errorCallback(response) {
        statsList.message = response.statusText;
    });

    statsList.pitchers = function () {
        console.log("pitchers");
        var pitchers = new Array();
        angular.forEach(statsList.stats, function (player) {
            if (player.InningsPitched > 0.0)
                pitchers.push(player);
        });

        return pitchers;
    };
});