var app = angular.module("statsApp", []);

console.log("Stats App");

app.controller("BattingStatsController", function ($http) {
    //console.log("Batting Stats Controller");

    var statsList = this;
    statsList.sortCol = "Name";
    statsList.sortReverse = false;
    statsList.message = "TEST";

    $http({
        method: 'GET',
        url: 'stats.json'
    }).then(function successCallback(response) {
        statsList.message = response.status;
        statsList.stats = new Array();
        angular.forEach(response.data, function (player) {
            statsList.stats.push(player);
        });
        //console.log(statsList.stats);
    }, function errorCallback(response) {
        statsList.message = response.statusText;
    });

    statsList.pitchers = function () {
        //console.log("pitchers");
        var pitchers = new Array();
        angular.forEach(statsList.stats, function (player) {
            if (player.InningsPitched > 0.0)
                pitchers.push(player);
        });

        return pitchers;
    };
});

app.controller("ChangesController", function ($http) {
    var commits = this;

    $http({
        method: 'GET',
        url: 'https://api.github.com/repos/danieljjefferson/NPSoftballStats/commits'
    }).then(function successCallback(response) {
        commits.message = response.status;
        //console.log(response.data);
        commits.changes = new Array();
        angular.forEach(response.data, function (change) {
            commits.changes.push(change);
        });
    }, function errorCallback(response) {
        commits.message = response.statusText;
    });
});

app.controller("PlayerController", function ($http) {
    var player = this;

    $http({
        method: 'GET',
        url: 'json/games.json'
    }).then(function successCallback(response) {
        player.msg = response.status;
        player.games = response.data;
        //console.log(response.data);
    }, function errorCallback(response) {
        player.message = response.statusText;
    });
});