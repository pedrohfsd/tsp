function run(props, temperature, dropRate, delay){
    var currentTour = {vertices:props.vertices, cost:cost(props.vertices)};
    var bestTour = {vertices:currentTour.vertices, cost:currentTour.cost};
    var startCost = bestTour.cost;
    
    function delayedLoop(){
        setTimeout(function(){
            state_changed(props, {vertices:bestTour.vertices}); // update canvas graph
            log(props, 'Running... Temperature: '+Math.floor(temperature)+', Current: '+Math.floor(currentTour.cost)+', Best: '+Math.floor(bestTour.cost)); // update canvas text
            
            var newTour = findNeighbour(currentTour); // find a neighbour tour
            if(newTour.cost < currentTour.cost) currentTour = newTour; // if it's better accept it
            else if(Math.exp((currentTour.cost-newTour.cost)/temperature) > Math.random()) currentTour = newTour; // if there's still chance, try it
            
            if(currentTour.cost < bestTour.cost) bestTour = currentTour; // keep the best, always
            temperature *= 1-dropRate; // make it colder
            
            if(temperature>1) delayedLoop(); // loop until it's cold
            else log(props, 'Started with cost: '+Math.floor(startCost)+', ended with cost: '+Math.floor(bestTour.cost));
        }, delay);
    }
    delayedLoop();
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

function log(){
    console.log('log() must be implemented');
}

function state_changed(props, event){
    console.log('state_changed() must be implemented');
}
