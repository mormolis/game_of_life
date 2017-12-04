'use strict';
const Cell = require('./cell.js');
class Organism {

    constructor(size) {
        this.size = size;
        this.body = [];

        for (var i = 0; i < this.size; i++) {
            this.body[i] = [];
        }
    }

    init() {
        var alive;
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                alive = Math.random() >= 0.5;
                this.body[i][j] = new Cell(i, j, alive);
            }
        }
    }

    toString(){
        var str = "---------------------\n";
        for (var i = 0; i < this.size; i ++){
            for (var j = 0; j < this.size; j ++){
                str += "|"
                str += this.body[i][j].alive ? "*" : " ";

            }
            str += "|\n"
        }
        str += "---------------------\n";
        
        return str
    }

    _copyTheAliveStatus(){
        var isAlive =[]
        for (var i = 0; i < this.size; i++) {
            isAlive[i] = [];
        }
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                isAlive[i][j] = this.body[i][j].isAlive();
            }
        }
        return isAlive;
    }

    getToTheNextGeneration(){
        var aliveNeighboursCounter;
        var bodyReplica =  this._copyTheAliveStatus();
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                aliveNeighboursCounter = this._countAliveNeighbours(i,j, bodyReplica);
                if (aliveNeighboursCounter < 2){
                    this.body[i][j].killCell();
                } else if (aliveNeighboursCounter === 3){
                    this.body[i][j].regenerateCell();
                } else if (aliveNeighboursCounter > 3){
                    this.body[i][j].killCell();
                } else if (aliveNeighboursCounter === 2 && this.body[i][j].isAlive()){
                    this.body[i][j].regenerateCell();
                }
            }
        }
    }

    _countAliveNeighbours(row, col, array) {
        var neighboursPositions = this._findNeighbours(row, col);
        var counter = 0;
        for (var i = 0; i < neighboursPositions.length; i++){
            if (array[neighboursPositions[i][0]][neighboursPositions[i][1]]){
                counter ++;
            }
        }
        return counter;
    }

    _findNeighbours(row, col) {
        if (row > 0 && row < this.size - 1 && col > 0 && col < this.size - 1) {
            return this._innerCellNeighbours(row, col);
        } else if (row === 0 && col === 0) {
            return this._firstCellNeighbours(row, col)
        } else if (row === 0 && col < this.size - 1 && col > 0) {
            return this._firstRowCellNeighbours(row, col);
        } else if (col === 0 && row < this.size - 1 && row > 0) {
            return this._firstColumnCellNeighbours(row, col);
        } else if (row === 0 && col === this.size - 1) {
            return this._upperRightCellNeighbours(row, col)
        } else if (col === this.size - 1 && row > 0 && row < this.size - 1) {
            return this._lastColumnCellNeighbours(row, col);
        } else if (col === this.size - 1 && row === this.size - 1) {
            return this._downRightCornerCellNeighbours(row, col);
        } else if (row === this.size - 1 && col === 0) {
            return this._downLeftCornerCellNeighbours(row, col);
        } else if (row === this.size - 1 && col < this.size - 1 && col > 0) {
            return this._lastRowCellNeighbours(row, col);
        }
    }

    _innerCellNeighbours(row, col) {
        return [
            [row - 1, col - 1],
            [row - 1, col],
            [row - 1, col + 1],
            [row, col - 1],
            [row, col + 1],
            [row + 1, col - 1],
            [row + 1, col],
            [row + 1, col + 1]
        ];
    }

    _firstCellNeighbours(row, col) {
        return [
            [row, col + 1],
            [row + 1, col],
            [row + 1, col + 1]
        ];
    }

    _firstRowCellNeighbours(row, col) {
        return [
            [row, col - 1],
            [row, col + 1],
            [row + 1, col - 1],
            [row + 1, col],
            [row + 1, col + 1]
        ];
    }

    _firstColumnCellNeighbours(row, col) {
        return [
            [row - 1, col],
            [row - 1, col + 1],
            [row, col + 1],
            [row + 1, col + 1],
            [row + 1, col]
        ]
    }

    _upperRightCellNeighbours(row, col) {
        return [
            [row, col - 1],
            [row + 1, col - 1],
            [row + 1, col]
        ];
    }

    _lastColumnCellNeighbours(row, col) {
        return [
            [row - 1, col],
            [row - 1, col - 1],
            [row, col - 1],
            [row + 1, col - 1],
            [row + 1, col]
        ];
    }

    _downRightCornerCellNeighbours(row, col) {
        return [
            [row - 1, col],
            [row - 1, col - 1],
            [row, col - 1]
        ];
    }

    _downLeftCornerCellNeighbours(row, col) {
        return [
            [row - 1, col],
            [row - 1, col + 1],
            [row, col + 1]
        ];
    }

    _lastRowCellNeighbours(row, col) {
        return [
            [row, col - 1],
            [row - 1, col - 1],
            [row - 1, col],
            [row - 1, col + 1],
            [row, col + 1]
        ];
    }



}

module.exports = Organism;