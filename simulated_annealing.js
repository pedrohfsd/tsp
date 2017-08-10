function run(initialTour, temperature, dropRate, delay){
    var startCost = cost(initialTour);
    var state = {bestTour:{vertices:initialTour, cost:startCost}, temperature:temperature, currentTour:{vertices:initialTour, cost:startCost}};
    
    function delayed_coolDown(){
        setTimeout(function(){
            coolDown(dropRate, state);
            if(state.temperature > 1) delayed_coolDown(); // loop until it's cold
            else state_changed('Started with cost: '+Math.floor(startCost)+', ended with cost: '+Math.floor(state.bestTour.cost), state.bestTour);
        }, delay);
    }
    delayed_coolDown();
}

function coolDown(dropRate, state){
    state_changed('Running... Temperature: '+Math.floor(state.temperature)+', Current: '+Math.floor(state.currentTour.cost)+', Best: '+Math.floor(state.bestTour.cost), state.bestTour);
    var newTour = findNeighbour(state.currentTour); // find a neighbor tour
    if(newTour.cost <= state.currentTour.cost || Math.exp((state.currentTour.cost-newTour.cost)/state.temperature) > Math.random()){
        state.currentTour = newTour; // accept it
        if(state.currentTour.cost < state.bestTour.cost) state.bestTour = state.currentTour; // keep the best, always
    }            
    state.temperature *= 1-dropRate; // make it cooler
}

function findNeighbour(currentTour){
    var newTour = {vertices:currentTour.vertices.slice(), cost:currentTour.cost};
    var candidate1 = Math.floor(Math.random()*(currentTour.vertices.length));
    var candidate2 = Math.floor(Math.random()*(currentTour.vertices.length));
    var temp = newTour.vertices[candidate1];
    newTour.vertices[candidate1] = newTour.vertices[candidate2];
    newTour.vertices[candidate2] = temp;
    newTour.cost = cost(newTour.vertices);
    return newTour;
}

function cost(vertices){
    var total = 0;
    for(let i=1; i<vertices.length; i++){
        total += distance(vertices[i-1], vertices[i]);
    }
    total += distance(vertices[vertices.length-1], vertices[0]);
    return total;
}

function distance(vertice1, vertice2){ // replace with Manhattan, Haversine, etc...
    return Math.sqrt(Math.pow(vertice1[0]-vertice2[0], 2)+Math.pow(vertice1[1]-vertice2[1], 2));
}

function state_changed(message, event){}
