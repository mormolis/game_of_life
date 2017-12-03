describe("Cell", ()=>{
    var Cell = require('./../lib/cell.js');
    var cell1, cell2;
    beforeEach(function() {
        cell1 = new Cell(1, 1, true);
        cell2 = new Cell(5, 6, false);
      });


    describe(".isAlive", ()=>{
        it("should return true if a cell is alive", ()=>{
            expect(cell1.isAlive()).toBeTruthy();
        });
       
        it("should return false if a cell is not alive", ()=>{
            expect(cell2.isAlive()).toBeFalsy();
        });
    });
    
    describe(".increaseGeneration", ()=>{
        it('increases generation by one', ()=>{
            cell1.increaseGeneration();
            expect(cell1.generation).toEqual(1);
        });
    });

    describe(".resetGeneration", ()=>{
        it('sets generation to -1', ()=>{
            cell1.resetGeneration();
            expect(cell1.generation).toEqual(-1);
        });
    });

    describe(".regenerateCell", ()=>{
        it('increases cells generation', ()=>{
            cell1.regenerateCell();
            expect(cell1.generation).toEqual(1);
        });
        it('increases cells generation', ()=>{
            cell2.regenerateCell();
            expect(cell1.generation).toEqual(0);
        });
    });

    
});