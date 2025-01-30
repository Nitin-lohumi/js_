class Graph {
  constructor() {
    this.List = {};
  }

  addVertex(vertex) {
    if (!this.List[vertex]) {
      this.List[vertex] = [];
    }
  }

  addEdge(from, to) {
    if (!this.List[from]) this.List[from] = [];
    // if (!this.List[to]) this.List[to] = [];
    this.List[from].push(to);
    // this.List[to].push(from);
  }

  removeEdge(v1, v2) {
    if (this.List[v1]) this.List[v1] = this.List[v1].filter((v) => v !== v2);
    // if (this.List[v2]) this.List[v2] = this.List[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    if (!this.List[vertex]) return;
    while (this.List[vertex].length) {
      const neighbor = this.List[vertex].pop();
      this.removeEdge(vertex, neighbor);
    }
    delete this.List[vertex];
  }

  display() {
    for (let vertex in this.List) {
      console.log(vertex + " -> " + this.List[vertex].join(", "));
    }
  }

  dfs(start, visited = new Set()) {
    if (!start) return;
    console.log(start);
    visited.add(start);
    for (const neighbor of this.List[start]) {
      if (!visited.has(neighbor)) {
        this.dfs(neighbor, visited);
      }
    }
  }

  bfs(start) {
    if (!start) return;
    let queue = [start];
    let visited = new Set();
    visited.add(start);

    while (queue.length) {
      let cur = queue.shift();
      console.log(cur);
      for (const neighbor of this.List[cur]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }

  allPathsFromSourceToTarget(src, target, visited = new Set(), path = []) {
    if (src === target) return [[...path, src]];
    let res = [];
    path.push(src);
    visited.add(src);
    for (let node of this.List[src] || []) {
      if (!visited.has(node)) {
        let subPaths = this.allPathsFromSourceToTarget(node, target, visited, path);
        res.push(...subPaths);
      }
    }
    visited.delete(src);
    path.pop();
    return res;
  }

  hasCycle() {
    let visited = new Set();
    const dfs = (node, parent) => {
      visited.add(node);
      for (let neighbor of this.List[node] || []) {
        if (!visited.has(neighbor)) {
          if (dfs(neighbor, node)) return true;
        } else if (neighbor !== parent) {
          return true;
        }
      }
      return false;
    };
    for (let key in this.List) {
      if (!visited.has(Number(key))) {
        if (dfs(Number(key), -1)) return true;
      }
    }
    return false;
  }
  hasCylcleDirectedGraph() {
    let visited = new Set();
    let CallStack = new Set();
    const dfs = (node) =>{
     if(CallStack.has(node)) return true;
     if(visited.has(node)) return false;
     visited.add(node);
     CallStack.add(node);
     for(let neighbor of this.List[node]||[]){
        if(dfs(neighbor)) return true;
     }
     CallStack.delete(node);
     return false;
    }
    for(let key in this.List){
      if(!visited.has(Number(key))){
          if(dfs(Number(key))){
             return true;
          }
      }
    }
    return false;
  }
}

// Example Usage:
const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
// graph.addEdge(4,2);
console.log("Graph:");
graph.display();

console.log("\nDFS Traversal:");
graph.dfs(0);

console.log("\nBFS Traversal:");
graph.bfs(0);

console.log("\nAll Paths from 1 to 3:");
// console.log(graph.allPathsFromSourceToTarget(1, 3));

console.log("\nCycle Present?:", graph.hasCycle()); // Output: false (no cycle)//undirected graphs

console.log(graph.hasCylcleDirectedGraph());//directed graphs 