describe("Organism", () => {
    var Organism = require('./../lib/organism.js');
    var organism;
    beforeEach(function () {
        organism = new Organism(49);
    });

    describe(".findNeigbours", () => {
        it("should return an array of arrays, pointing out the neighbours", () => {
            expect(organism.findNeighbours(1, 1)).toEqual([
                [0, 0],
                [0, 1],
                [0, 2],
                [1, 0],
                [1, 2],
                [2, 0],
                [2, 1],
                [2, 2]
            ])
        });
        it("case row == 0, column == 0", () => {
            expect(organism.findNeighbours(0, 0)).toEqual([
                [0, 1],
                [1, 0],
                [1, 1]
            ]);
        });

        it("case row == 0, size > column > 0", () => {
            expect(organism.findNeighbours(0, 3)).toEqual([
                [0, 2],
                [0, 4],
                [1, 2],
                [1, 3],
                [1, 4]
            ]);
        });

        it("case col == 0, size > row > 0", () => {
            expect(organism.findNeighbours(10, 0)).toEqual([
                [9, 0],
                [9, 1],
                [10, 1],
                [11, 1],
                [11, 0]
            ]);
        });

        it("case row == 0, col == size", () => {
            expect(organism.findNeighbours(0, 49)).toEqual([
                [0, 48],
                [1, 48],
                [1, 49]
            ]);
        });

        it("case 0 < row < size, col == size", () => {
            expect(organism.findNeighbours(10, 49)).toEqual([
                [9, 49],
                [9, 48],
                [10, 48],
                [11, 48],
                [11, 49]
            ]);
        });

        it("case row == size & col == size", () => {
            expect(organism.findNeighbours(49, 49)).toEqual([
                [48, 49],
                [48, 48],
                [49, 48]
            ]);
        });
        it("case row == size & col == 0", () => {
            expect(organism.findNeighbours(49, 0)).toEqual([
                [48, 0],
                [48, 1],
                [49, 1]
            ]);
        });
        it("case row == size & 0 < col < size", () => {
            expect(organism.findNeighbours(49, 1)).toEqual([
                [49, 0],
                [48, 0],
                [48, 1],
                [48, 2],
                [49, 2]
            ]);
        });
    });
});