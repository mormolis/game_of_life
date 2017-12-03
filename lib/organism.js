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
        var str = "- - - - - - - - - - -\n";
        for (var i = 0; i < this.size; i ++){
            for (var j = 0; j < this.size; j ++){
                str += "|"
                str += this.body[i][j].alive ? "*" : " ";

            }
            str += "|\n"
        }
        str += "- - - - - - - - - - -\n";
        return str
    }



    findNeighbours(row, col) {
        if (row > 0 && row < this.size && col > 0 && col < this.size) {
            return this._innerCellNeighbours(row, col);
        } else if (row === 0 && col === 0) {
            return this._firstCellNeighbours(row, col)
        } else if (row === 0 && col < this.size && col > 0) {
            return this._firstRowCellNeighbours(row, col);
        } else if (col === 0 && row < this.size && row > 0) {
            return this._firstColumnCellNeighbours(row, col);
        } else if (row === 0 && col === this.size) {
            return this._upperRightCellNeighbours(row, col)
        } else if (col === this.size && row > 0 && row < this.size) {
            return this._lastColumnCellNeighbours(row, col);
        } else if (col === this.size && row === this.size) {
            return this._downRightCornerCellNeighbours(row, col);
        } else if (row === this.size && col === 0) {
            return this._downLeftCornerCellNeighbours(row, col);
        } else if (row === this.size && col < this.size && col > 0) {
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