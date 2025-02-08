class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  add(node, distance) {
    this.queue.push({ node, distance });
    this.queue.sort((a, b) => a.distance - b.distance);
  }
  delete() {
    return this.queue.shift();
  }
  isEmpty() {
    return this.queue.length == 0;
  }
}

function shortestPath(adj, src) {
  let obj = {};
  for (let i = 0; i < adj.length; i++) {
    obj[i] = new Set(adj[i]); 
  }
  let queue = [];
  let distance = Array(adj.length).fill(Infinity);
  queue.push(src);
  distance[src] = 0;
  while (queue.length > 0) {
    let cur = queue.shift();
    for (let neighbor of obj[cur]) {
      if (distance[neighbor] === Infinity) {
        distance[neighbor] = distance[cur] + 1;
        queue.push(neighbor);
      }
    }
  }
  return distance.map(d => (d === Infinity ? -1 : d));
}

console.log(
  shortestPath([[3], [3], [], [0, 1]],3));

// function Dijkastra(graphs, source) {
//   let distance = new Map();
//   let pq = new PriorityQueue();
//   let prev = new Map();
//   for (let node in graphs) {
//     distance.set(node, Infinity);
//     prev.set(node, null);
//   }
//   pq.add(source, 0);
//   distance.set(source, 0);
//   while (!pq.isEmpty()) {
//     let { node: curr } = pq.delete();
//     for (const key in graphs[curr]) {
//       let weight = graphs[curr][key];
//       let newWeight = distance.get(curr) + weight;
//       if (newWeight < distance.get(key)) {
//         distance.set(key, newWeight);
//         prev.set(key, curr);
//         pq.add(key, newWeight);
//       }
//     }
//   }
//   return { distance, prev };
// }

// let graph = {
//   A: { B: 4, C: 2 },
//   B: { A: 4, C: 5, D: 10 },
//   C: { A: 2, B: 5, D: 3 },
//   D: { B: 10, C: 3 },
// };

// console.log(Dijkastra(graph, "A"));
