'use strict';
var Organism = require('./lib/organism.js');

var organism = new Organism(10);
organism.init();
console.log(organism.toString());
