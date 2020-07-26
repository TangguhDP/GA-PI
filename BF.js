function initializeBF() {
    BFBestEver = BFOrder.slice();
    BFBestRecordDist = Infinity;
    BFStatsCurr = [];
    BFStatsBest = [];
}

function startBF() {
    var i = floor(random(1, BFOrder.length - 1));
    var j = floor(random(1, BFOrder.length - 1));
    BFSwap(BFOrder, i, j);
    var BFCurrDist = BFCalcDist(BFCities, BFOrder);
    if (BFCurrDist < BFBestRecordDist) {
        BFBestEver = BFOrder.slice();
        BFBestRecordDist = BFCurrDist;
        document.getElementById('BFBestRoute').textContent = BFBestEver.map(item => { return item + 1 });
        document.getElementById('BFBestDistance').textContent = BFBestRecordDist.toFixed(4);
    }
    document.getElementById('BFCurrRoute').textContent = BFOrder.map(item => { return item + 1 });
    document.getElementById('BFCurrDistance').textContent = BFCurrDist.toFixed(4);
    BFStatsCurr.push(BFCurrDist);
    BFStatsBest.push(BFBestRecordDist);
}

function BFSwap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function BFCalcDist(points, order) {
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