class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }
  addEdges(vertex, edge) {
    if (this.adjacencyList[vertex] || this.adjacencyList[edge]) {
      this.adjacencyList[vertex].push(edge);

      this.adjacencyList[edge].push(vertex);
    }
    return this.adjacencyList;
  }

  removeEdge(index, vertex) {
    this.adjacencyList[index] = this.adjacencyList[index].filter(
      (v1) => v1 !== vertex
    );
    this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
      (v1) => v1 !== index
    );
    return this.adjacencyList;
  }
  removeVertex(index) {
    while (this.adjacencyList[index].length) {
      let newAdjacencyList = this.adjacencyList[index].pop();
      this.removeEdge(index, newAdjacencyList);
    }

    return this.adjacencyList;
  }
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }
    dfs(start);

    return result;
  }
  dfsIterative(start) {
    const result = [];
    const visited = {};
    const stack = [start];
    let currentVal;
    visited[start] = true;
    while (stack.length) {
      currentVal = stack.pop();
      result.push(currentVal)
      this.adjacencyList[currentVal].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  bfs(start){
    const result = [];
    const visited = {};
    const queue = [start];
    let currentVal;
    visited[start] = true;
    while (queue.length) {
      currentVal = queue.shift();
      result.push(currentVal)
      this.adjacencyList[currentVal].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let li = new Graph();
console.log(li.addVertex("A"));
console.log(li.addVertex("B"));
console.log(li.addVertex("C"));
console.log(li.addVertex("D"));

console.log(li.addEdges("A", "C"));
console.log(li.addEdges("A", "B"));
console.log(li.addEdges("B", "D"));
console.log(li.addEdges("D", "C"));
//   console.log(li.removeEdge("B", "D"));
//   console.log(li.removeVertex("B"));
console.log(li.depthFirstRecursive("A"));
console.log(li.dfsIterative("A"));
