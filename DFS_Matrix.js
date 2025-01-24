const DFSMatrix =(grid)=>{
let m = grid.length;
let n = grid[0].length;
let visited = Array.from({length:m},()=>Array(n).fill(false));
let Stack =[];
let direction = [[-1,0],[1,0],[0,1],[0,-1]];
Stack.push([0,0]);
visited[0][0] = true;
while (Stack.length>0) {
    let [x,y] = Stack.pop();
    console.log("vist => ", `[${x},${y}]`);
    for (const [dx,dy] of direction) {
        const nx = x+dx;
        const ny = y+dy;
        if(nx>=0&&nx<m&&ny>=0&&ny<n&&!visited[nx][ny]&&grid[nx][ny]==1){
            visited[nx][ny] = true;
            Stack.push([nx,ny]);
        }
    }
}
}
const matrix = [
        [1, 0, 1],
        [1, 1, 0],
        [0, 1, 1]
    ];
console.log(DFSMatrix(matrix))
;









// const DFSMatrix=(grid)=>{
//   let m = grid.length;
//   let n = grid[0].length;
//   let vistedCells = Array.from({length:m},()=>Array(n).fill(false));
//   dfsCall(grid,0,0,vistedCells,m,n);
//   console.log(vistedCells)
// }
// const dfsCall =(grid,x,y,visitedCell,m,n)=>{
//    if(x<0||x>=m||y<0||y>=n||grid[x][y]==0||visitedCell[x][y]){
//     return; 
//    }
//    visitedCell[x][y] = true;
//    console.log("vist => ", `[${x},${y}]`);
//    const Direction = [[-1,0],[1,0],[0,1],[0,-1]];
//    for(let [dx,dy] of Direction){
//     dfsCall(grid,x+dx,y+dy,visitedCell,m,n);
//    }
// }
// const matrix = [
//     [1, 0, 1],
//     [1, 1, 0],
//     [0, 1, 1]
// ];
// console.log(DFSMatrix(matrix));