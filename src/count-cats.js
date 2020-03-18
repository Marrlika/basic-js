module.exports = function countCats(matrix) {
  return matrix.reduce((sumAll, row) => 
        sumAll + row.reduce((sumInRow, item)=>
          (item==="^^")?sumInRow+1:sumInRow,0), 0);
};
