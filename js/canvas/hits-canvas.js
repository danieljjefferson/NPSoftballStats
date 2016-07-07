var Diamond = {
    secondBase: { x: 150, y: 90 },
    firstBase: { x: 250, y: 190 },
    thirdBase: { x: 50, y: 190 },
    homePlate: {x: 150, y: 290}
};


function DrawDiamond() {
    var hits_canvas = document.getElementById("hits-canvas");
    var context = hits_canvas.getContext("2d");

    context.fillStyle = "#00b300";
    context.fillRect(0, 0, hits_canvas.width, hits_canvas.height);

    context.beginPath();
    context.moveTo(Diamond.secondBase.x, Diamond.secondBase.y);
    context.lineTo(Diamond.firstBase.x, Diamond.firstBase.y);
    context.lineTo(Diamond.homePlate.x, Diamond.homePlate.y);
    context.lineTo(Diamond.thirdBase.x, Diamond.thirdBase.y);
    context.closePath();
    

    context.fillStyle = "#ffcc66";
    context.fill();
    context.stroke();
    console.log("Diamond Complete!");
    DrawBases();
};

function DrawBases() {
    var hits_canvas = document.getElementById("hits-canvas");
    var context = hits_canvas.getContext("2d");

    //draw first
    context.fillStyle = "#fff";
    context.strokeStyle = "#000";
    context.fillRect(Diamond.firstBase.x - 5, Diamond.firstBase.y - 5, 10, 10);
    context.strokeRect(Diamond.firstBase.x - 5, Diamond.firstBase.y - 5, 10, 10);

    context.fillRect(Diamond.secondBase.x - 5, Diamond.secondBase.y - 5, 10, 10);
    context.strokeRect(Diamond.secondBase.x - 5, Diamond.secondBase.y - 5, 10, 10);

    context.fillRect(Diamond.thirdBase.x - 5, Diamond.thirdBase.y - 5, 10, 10);
    context.strokeRect(Diamond.thirdBase.x - 5, Diamond.thirdBase.y - 5, 10, 10);

    context.fillRect(Diamond.homePlate.x - 5, Diamond.homePlate.y - 5, 10, 10);
    context.strokeRect(Diamond.homePlate.x - 5, Diamond.homePlate.y - 5, 10, 10);
    
    //context.fill();
}

function DrawSingleBase() {

}

function DrawGridLines() {
    var hits_canvas = document.getElementById("hits-canvas");
    var context = hits_canvas.getContext("2d");

    for (var x = 0.5; x < 500; x += 10) {
        context.moveTo(x, 0);
        context.lineTo(x, 375);
    }

    for (var y = 0.5; y < 375; y += 10) {
        context.moveTo(0, y);
        context.lineTo(500, y);
    }

    context.strokeStyle = "#eee";
    context.stroke();
    
}