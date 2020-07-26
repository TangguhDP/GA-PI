var statSketch = function (p) {
    p.setup = function () {
        var canvasDiv2 = document.getElementById('stat');
        p.widthCanvas2 = canvasDiv2.offsetWidth;
        p.heightCanvas2 = canvasDiv2.offsetHeight;
        //Create canvas
        p.createCanvas(p.widthCanvas2, p.heightCanvas2).parent('stat');

    }
    p.draw = function () {
        p.background('#2F2E41');
        p.strokeWeight(3)
        p.stroke('blue');
        p.noFill();
        p.beginShape();
        for (let i = 0; i < statsBest.length; i++) {
            var y = map(statsBest[i], 0, p.widthCanvas2 * 5, p.heightCanvas2, 0);
            p.vertex(i, y);
        }
        p.endShape();
        if (statsBest.length > p.widthCanvas2) {
            statsBest.splice(0, 1);
        }

        p.stroke('red');
        p.noFill();
        p.beginShape();
        for (let i = 0; i < statsCurr.length; i++) {
            var y = map(statsCurr[i], 0, p.widthCanvas2 * 5, p.heightCanvas2, 0);
            p.vertex(i, y);
        }
        p.endShape();
        if (statsCurr.length > p.widthCanvas2) {
            statsCurr.splice(0, 1);
        }

    }
}

var myStatCanvas = new p5(statSketch);