'use strict';
var Organism = require('./lib/organism.js');

var organism = new Organism(20);
organism.init();
while (true){
    console.log(organism.toString());
    organism.getToTheNextGeneration();
}
