//Scientific Research
//Tangguh Destio Pramono
//15117880

//number of cities
var num = 0;
//Max number of cities
var maxNum = 8;
//Order
var order = [];
//Track cities location
var cities = [];
//Population
var population = [];
//Fiteness
var fitness = [];
//MAxPop
var popSize = 200;
var currentBest = [];
var buttonStart;

//recordedDistance
var recordDistance = Infinity;
var bestEver = [];
function setup() {
    //Create canvas
    var c = createCanvas(600, displayHeight);
    c.parent('canvas');
    background(0);
    fill(255);
    //Create button
    buttonStart = createButton('Start GA');
    buttonStart.position(515, 360);
    buttonStart.addClass('button-startGA');
    buttonStart.mousePressed(startGA);
    //Initiate no loop
    noLoop();
}

function draw() {
    background(0);
    //Implementation GA
    calculateFitness();
    normalizeFitness();
    nextGeneration();

    stroke('blue');
    strokeWeight(2);
    noFill();
    beginShape();
    for (let i = 0; i < bestEver.length; i++) {
        var loc = bestEver[i];
        vertex(cities[loc].x, cities[loc].y + 150);
        ellipse(cities[loc].x, cities[loc].y + 150, 15);
    }
    endShape();
    // translate(0,height/2);
    stroke('red');
    strokeWeight(2);
    noFill();
    beginShape();
    for (let i = 0; i < currentBest.length; i++) {
        var loc = currentBest[i];
        vertex(cities[loc].x, cities[loc].y);
        ellipse(cities[loc].x, cities[loc].y, 15);
    }
    endShape();
    if (currentBest == recordDistance) {
        console.log("Finished");
        noLoop();
    }
    console.log('order ' + order);
    console.log('best ever ' + bestEver);
    console.log(recordDistance);
    console.log('current best ' + currentBest);

}

function mouseClicked() {
    //If city reach maxNum don't draw any more city
    if (num >= maxNum) {
        return;
    } else {
        //Create location of city
        var v = createVector(mouseX, mouseY);
        cities[num] = v;
        //Create order of city
        order[num] = num;
        //Continue to next city
        num++;
    }
    //Draw City
    noStroke();
    if (num === 1) {
        text('t', mouseX, mouseY - 20);
        fill(255);
    }
    text(num, mouseX, mouseY - 20);
    fill(255);
    ellipse(mouseX, mouseY, 15);
    //Draw line between
    if (num >= 2) {
        stroke(255);
        strokeWeight(1);
        line(cities[num - 2].x, cities[num - 2].y, mouseX, mouseY);
    }
    // console.log(cities[num-1].x);
    // console.log(order);
}
function startGA() {
    // text("U click GA", 200,200);

    //create population
    for (let i = 0; i < popSize; i++) {
        population[i] = order.slice();
        acak(population[i]);
    }
    //Start drawing and looping
    loop();
}

function acak(urut) {
    result = shuffle(urut.slice(1, maxNum - 1));
    urut.splice(1, maxNum - 2);
    for (let i = 0; i < result.length; i++) {
        urut.splice(i + 1, 0, result[i]);
    }
    // console.log('order' + order);

}

function calcDistance(points, order) {
    var sum = 0;
    for (let i = 0; i < order.length - 1; i++) {
        var cityAIndex = order[i];
        var cityA = points[cityAIndex];
        var cityBIndex = order[i + 1];
        var cityB = points[cityBIndex];
        var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
        sum += d;
    }
    return sum;
}