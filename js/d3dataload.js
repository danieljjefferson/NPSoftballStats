var keys = ["Name", "AtBats", "Hits", "BattingAverage", "Runs", "RBIs", "Doubles", "Triples", "HomeRuns", "SluggingPercent", "OnBasePercent", "RSP", "Sacrifces", "StrikeOuts", "BaseOnBalls"];

(function () {
    d3.json("json/stats.json", function (error, playerData) {
        //console.log(playerData);

        var table = d3.select("#player-stats"), thead = table.append("thead"), tbody = table.append("tbody");
        var headers = thead.append("tr").selectAll("th").data(keys).text(function (column) { return column; });

        headers.enter().append("th").html(function (column) {
            switch(column){
                case "BattingAverage":
                    return "<span class='tool-tip' data-toggle='tooltip' title='Sort by Batting Average'>BAvg</span>"; 
                case "AtBats":
                    return "At Bats";
                case "Doubles":
                    return "2B";
                case "Triples":
                    return "3B";
                case "HomeRuns":
                    return "HR";
                case "SluggingPercent":
                    return "Slug%";
                case "OnBasePercent":
                    return "OB%";
                case "Sacrifces":
                    return "Sac";
                case "StrikeOuts":
                    return "K";
                case "BaseOnBalls":
                    return "BB";
            }
            return "<span class='tool-tip' data-toggle='tooltip' title='Sort by " + column +"'>" + column + "</span>"; 
        }).on("click", function (d){
            console.log("clicked: "+ d);
        });

        var rows = tbody.selectAll("tr").data(playerData);
        rows.enter().append("tr");

        var cells = rows.selectAll("td").data(function (row) {
            return keys.map(function (column) { 
                return { column: column, value: row[column]};
            });
        }).enter().append("td").text(function (d) {
            switch(d.column){
                case "BattingAverage":
                    return d.value.toFixed(3);
                case "SluggingPercent":
                    return d.value.toFixed(3);
                case "OnBasePercent":
                    return d.value.toFixed(3);
            }
            return d.value;
        });
        $(".tool-tip").tooltip();
    });
})();