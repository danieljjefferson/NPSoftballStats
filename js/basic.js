(function () {
    $.getJSON("json/stats.json", function (data) {
        var $player_table = $("#player-stats");
        $.each(data, function (i, player) {
            var row = "<tr><td>" + player.Name + "</td><td>" + player.AtBats + "</td><td>" + player.Hits + "</td><td>" + Number(player.BattingAverage).toFixed(3) + "</td><td>" + player.Runs + "</td><td>" + player.RBIs + "</td><td>" + player.Doubles + "</td><td>" + player.Triples + "</td><td>" + player.HomeRuns + "</td><td>" + Number(player.SluggingPercent).toFixed(3) + "</td><td>" + Number(player.OnBasePercent).toFixed(3) + "</td><td>" + Number(player.RSP).toFixed(3) + "</td><td>" + player.Sacrifces + "</td><td>" + player.StrikeOuts + "</td><td>" + player.BaseOnBalls + "</td></tr>"
            $player_table.append(row);
            //console.log(player.Name);
        });
    });
})();