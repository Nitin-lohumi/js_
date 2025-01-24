const dfsMatrix =(grid)=>{
    let m =grid.length;
    let n = grid[0].length;
    console.log(grid)
    const Direction =[
        [-1,0],
        [1,0],
        [0,-1],
        [0,1]
    ];
    const visitedCell = Array.from({length:m},()=>Array(n).fill(false));
    let queue =[];
    queue.push([0,0]);
    visitedCell[0][0] = true;
    let countCells = 0;
    while (queue.length>0) {
        let [r,c] = queue.shift();
        console.log("vist => ", `[${r},${c}]`);
        countCells = countCells+1;
        for(const [dx,dy]  of Direction){
            const nx = r+dx;
            const ny = c+dy;
            if(nx>=0 && nx<m && ny>=0 && ny<n && grid[nx][ny]===1 && !visitedCell[nx][ny]){
                visitedCell[nx][ny] = true;
                queue.push([nx,ny]);
            }
        }
    }
  console.log(countCells)
}
const matrix = [
    [1, 0, 1],
    [1, 1, 0],
    [0, 1, 1]
];
console.log(dfsMatrix(matrix));