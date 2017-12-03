'use strict';

const ORGANISM_SIZE = 49;

class Cell {

    constructor(row, column, alive){
        this.row = row;
        this.column = column;
        this.alive = alive;
        this.generation = alive ? 0 : -1;
    }

    isAlive(){
        return this.alive;
    }

    increaseGeneration(){
        this.generation ++;
    }
    
    resetGeneration(){
        this.generation = -1;
    }

    regenerateCell(){
        this.increaseGeneration();
        this.alive = true;
    }

    killCell(){
        this.alive = false;
        this.resetGeneration();
    }

}

module.exports = Cell;