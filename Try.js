var exist = function(board, word) {
  let m = board.length;
  let n = board[0].length;
  let visited = Array.from({ length: m }, () => Array(n).fill(false));

  const dfsCall = (x, y, wordPosition) => {
      if (wordPosition === word.length) return true; 
      if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y] || board[x][y] !== word[wordPosition]) {
          return false;
      }
      visited[x][y] = true;
      const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      for (let [dx, dy] of directions) {
          if (dfsCall(x + dx, y + dy, wordPosition + 1)) {
              return true; 
          }
      }
      visited[x][y] = false;
      return false;
  };

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (dfsCall(i, j, 0)) {
              return true;
          }
      }
  }

  return false;
};

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED")); // Output: true
