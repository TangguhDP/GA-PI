function calculateFitness() {
    currentRecord = Infinity;
    for (let i = 0; i < population.length; i++) {
        var d = calcDistance(cities, population[i]);
        if (d < recordDistance) {
            recordDistance = d;
            bestEver = population[i];
        }
        if (d < currentRecord) {
            currentRecord = d;
            currentBest = population[i];
            console.log('current record ' + currentRecord);
        }
        // if (currentBest == bestEver) {
        //     console.log('Finished');
        //     noLoop();
        // }
        fitness[i] = 1 / (d + 1);
    }
}

function normalizeFitness() {
    sum = 0;
    for (let i = 0; i < fitness.length; i++) {
        sum += fitness[i];
    }
    for (let i = 0; i < fitness.length; i++) {
        fitness[i] = fitness[i] / sum;
    }
}

function nextGeneration() {
    var newPopulation = [];
    for (let i = 0; i < population.length; i++) {
        var order = pickOne(population, fitness);
        // Mutation
        // 50% of the time shuffle one spot to see if it improves
        if (random(1) < 0.05) {
            mutate(order);
        }
        newPopulation[i] = order;
    }
    population = newPopulation;
    // console.log(population);

}
//improved pool selection
function pickOne(list, prob) {
    var index = 0;
    var r = random(1);

    while (r > 0) {
        r = r - prob[index];
        index++;
    }
    index--;
    return list[index].slice();
}

function mutate(order) {
    var indexA = floor(random(1, order.length - 2))
    var indexB = floor(random(1, order.length - 2))
    swap(order, indexA, indexB);
}

function swap(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}