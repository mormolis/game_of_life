'use strict';
class Organism {

    constructor(size){
        this.size = size;
        this.body = [];

        for(var i = 0; i < this.size; i++){
            this.body[i] = [];
        }
    }

    init(){
        var alive;
        for (var i = 0; i < this.size; i++ ){
            for (var j = 0; j < this.size; j++){
                alive = Math.random() >= 0.5;
                this.body[i][j] = new Cell(i, j, alive);
            }
        }
    }

    findNeighbours(row, col) {
        // console.log(row, col, this.size)
        if (row > 0 && row < this.size && col > 0 && col < this.size){
            return  [[row - 1, col - 1],
                    [row -1, col],
                    [row -1, col + 1],
                    [row, col - 1],
                    [row, col + 1],
                    [row + 1, col - 1],
                    [row + 1, col],
                    [row + 1, col + 1]];

        } else if (row === 0 && col === 0 ){
            return [[row, col + 1], 
                    [row + 1, col], 
                    [row + 1, col + 1]];

        } else if ( row === 0 && col < this.size && col > 0){
            return [[row, col - 1],
                    [row, col + 1],
                    [row + 1, col - 1],
                    [row + 1, col],
                    [row + 1, col + 1]];
        } else if ( col === 0 && row < this.size && row > 0){
            return [[row - 1, col],
                    [row - 1, col + 1],
                    [row, col + 1],
                    [row + 1, col + 1],
                    [row + 1, col]]
        
        } else if ( row === 0 && col === this.size){
            return [[row, col -1], 
                    [row + 1, col - 1],
                    [row + 1, col]];
        } else if ( col === this.size && row > 0 && row < this.size){
            return [[row - 1, col],
                    [row - 1, col - 1],
                    [row, col - 1],
                    [row + 1, col - 1],
                    [row + 1, col]];
        } else if (col === this.size && row === this.size){
            return [[row -1, col],
                    [row - 1, col -1],
                    [row, col - 1]];
        } else if ( row === this.size && col === 0){
            return [[row - 1, col],
                    [row - 1, col + 1],
                    [row, col + 1]];
        } else if ( row === this.size && col < this.size && col > 0){
            return [[row, col - 1],
                    [row - 1, col - 1],
                    [row - 1, col],
                    [row - 1, col + 1],
                    [row, col + 1]];
        }
    }
}

module.exports = Organism;
