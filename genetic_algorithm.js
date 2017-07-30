function run(props, vertices, population_size, max_generation, mutation_rate, elitism, delay){
    var current_generation = 1, population = populate(vertices, population_size);
    var best_overall = population.find(function(o){return o.fitness==Math.min.apply(Math, population.map(function(x){return x.fitness;}));});
    var startCost = fitness(vertices);
    var mutations = 0;
    
    function evolve(){
        setTimeout(function(){
            var parents = select(population, population_size*2) // selection
            var new_population = elitism ? [best_overall] : []; // elitism
            var best_current = elitism ? best_overall : {fitness:Number.POSITIVE_INFINITY};
            while(new_population.length < Number(population_size)+(elitism ? 1 : 0)){
                var individual = cross(parents.shift(), parents.shift()); // crossover
                if (mutate(mutation_rate, individual)) mutations++; //mutation
                new_population.push(individual);
                if(individual.fitness < best_current.fitness) best_current = individual;
            }
            if(best_current.fitness < best_overall.fitness) best_overall = best_current; // keep the best, always
            
            state_changed(props, {vertices:best_overall.vertices}); // update canvas graph
            log(props, 'Running... Generation: '+current_generation+', Best: '+Math.floor(best_current.fitness)+', Global Best:'+Math.floor(best_overall.fitness)+', Mutations:'+mutations); // update canvas text
            current_generation++;
            if(current_generation < max_generation) evolve(); // loop until max generation
            else log(props, 'Started with cost: '+Math.floor(startCost)+', ended with cost: '+Math.floor(best_overall.fitness));
        }, delay);
    }
    evolve();
}

function select(population, n){ // select the best parents
    var min = Math.min.apply(Math, population.map(function(x){return x.fitness;}));
    var max = Math.max.apply(Math, population.map(function(x){return x.fitness;}));
    var lim = min+max;
    population.forEach(function(x){x.cost_inv = lim-x.fitness}); // invert so that smaller is better
    population = population.sort(function(x, y){return y.cost_inv-x.cost_inv}); // sort descending
    var sum = population.reduce(function(a,b){return a+b.cost_inv}, 0);
    population.forEach(function(x){x.prob = x.cost_inv/sum});
    
    // based on fitness probability, select parents to cross
    var parents = [];
    for(let i=0; i<n; i++){
        var total = 0, ind = 0, prob = Math.random();
        for(let j=0; j<population.length; j++){
            ind = ind+1, total = total+population[j].prob;
            if(total >= prob){
                if(j==0) parents.push(population[0]);
                else parents.push(population[j-1]);
                break;
            }
        }
    }
    return parents;
}

function cross(parent1, parent2){ // using single point crossover
    var middle = Math.floor(parent1.vertices.length/2);
    var baby = {vertices:parent1.vertices.slice(0, middle)};
    for(let i=0; i<parent1.vertices.length; i++){
        var gene = parent2.vertices[i];
        if(typeof baby.vertices.find(function(x){return x[0]==gene[0] && x[1]==gene[1];}) === 'undefined'){
            baby.vertices.push(gene);
        }
    }
    baby.fitness = fitness(baby.vertices);
    return baby;
}

function mutate(mutationRate, individual){ // mutate, switch a pair of chromossome values
    if(Math.random() <= mutationRate){
        var candidate1 = Math.floor(Math.random()*(individual.vertices.length));
        var candidate2 = Math.floor(Math.random()*(individual.vertices.length));
        var temp = individual.vertices[candidate1];
        individual.vertices[candidate1] = individual.vertices[candidate2];
        individual.vertices[candidate2] = temp;
        individual.fitness = fitness(individual.vertices);
        return true;
    }
    return false;
}

function populate(vertices, population_size){ // create random citizens
    var population = [];
    for(let i=0; i<population_size; i++){
        var temp = vertices.slice();
        var tour = []
        while(temp.length > 0){
            var index = Math.floor(Math.random()*(temp.length));
            tour.push(temp[index]);
            temp.splice(index, 1);
        }
        population.push({vertices:tour, fitness:fitness(tour)});
    }
    return population;
}

function fitness(vertices){ // returns the cost of the tour
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