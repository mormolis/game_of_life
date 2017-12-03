describe(".getNeighbours", ()=>{
    it("should return an array of arrays, pointing out the neighbours", ()=>{
        expect(cell1.getNeighbours(1,1)).toEqual([[0,0], [0,1], [0,2], [1,0], [1,2], [2,0], [2,1], [2,2]])
    });
});