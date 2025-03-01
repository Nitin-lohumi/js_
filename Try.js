var setZeroes = function (matrix) {
  let map = new Map();
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        map.set(`${i},${j}`, matrix[i][j]);
      }
    }
  }
  for (const [key, _] of map.entries()) {
    const Indexes = key.split(",");
    let index_i = Number(Indexes[0]);
    let index_j = Number(Indexes[1]);
    for (let i = 0; i < m; i++) {
      matrix[i][index_j] = 0;
    }
    for (let i = 0; i < n; i++) {
      matrix[index_i][i] = 0;
    }
  }
  return matrix;
};
console.log(
  setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])
);
