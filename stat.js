var statSketch = function (p) {
    p.setup = function () {
        var canvasDiv2 = document.getElementById('statGA');
        p.widthCanvas2 = canvasDiv2.offsetWidth;
        p.heightCanvas2 = canvasDiv2.offsetHeight;
        //Create canvas
        p.createCanvas(p.widthCanvas2, p.heightCanvas2).parent('statGA');

    }
    p.draw = function () {
        p.background('#2F2E41');
        p.strokeWeight(3);
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


var BFStatSketch = function (q) {
    q.setup = function () {
        var canvasDivBF = document.getElementById('statBF');
        q.BFWidthCanvas = canvasDivBF.offsetWidth;
        q.BFHeightCanvas = canvasDivBF.offsetHeight;
        //Create canvas
        q.createCanvas(q.BFWidthCanvas, q.BFHeightCanvas).parent('statBF');

    }
    q.draw = function () {
        q.background('#2F2E41');
        q.strokeWeight(3);
        q.stroke('blue');
        q.noFill();
        q.beginShape();
        for (let i = 0; i < BFStatsBest.length; i++) {
            var y = map(BFStatsBest[i], 0, q.BFWidthCanvas * 5, q.BFHeightCanvas, 0);
            q.vertex(i, y);
        }
        q.endShape();
        if (BFStatsBest.length > q.BFWidthCanvas) {
            BFStatsBest.splice(0, 1);
        }

        q.stroke('red');
        q.noFill();
        q.beginShape();
        for (let i = 0; i < BFStatsCurr.length; i++) {
            var y = map(BFStatsCurr[i], 0, q.BFWidthCanvas * 5, q.BFHeightCanvas, 0);
            q.vertex(i, y);
        }
        q.endShape();
        if (BFStatsCurr.length > q.BFWidthCanvas) {
            BFStatsCurr.splice(0, 1);
        }

    }
}

var myStatCanvasBF = new p5(BFStatSketch);