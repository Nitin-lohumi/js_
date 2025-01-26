class Graphs {
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
    if (!this.List[to]) this.List[to] = [];
    this.List[from].push(to);
    this.List[to].push(from);
  }

  removeEdges(v1, v2) {
    this.List[v1] = this.List[v1].filter((v) => v !== v2);
    this.List[v2] = this.List[v2].filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    if (!this.List[vertex]) {
      return;
    }
    while (this.List[vertex].length) {
      const v = this.List[vertex].pop();
      this.removeEdges(vertex,v);
    }
    delete this.List[vertex];
  }

  display() {
    for (let vertex in this.List) {
      console.log(vertex + " -> " + this.List[vertex].join(", "));
    }
  }
  dfs(start,visited=new Set()){
   if(!start){
    return;
   }
   console.log(start);
   visited.add(start);
   for (const element of this.List[start]) {
      if(!visited.has(element)){
        this.dfs(element,visited);
      }
   }
  }
  bfs(start,visited=new Set()){
    if(!start)return;
    let q =[];
    q.push(start);
    visited.add(start);
    while (q.length) {
        let cur = q.shift();
        console.log(cur);
        for (const element of this.List[cur]) {
             if(!visited.has(element)){
                 q.push(element);
                visited.add(element);
             }
        }
    }
  }
}

const graph = new Graphs();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
// graph.display();
// graph.dfs("A");
graph.bfs("A");
