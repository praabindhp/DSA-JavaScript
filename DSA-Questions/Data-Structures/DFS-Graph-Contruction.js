// DFS Algorithm For A Graph

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add Vertex
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // Add Edge
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    // Depth First Search
    dfs(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfsHelper(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfsHelper(neighbor);
                }
            });
        })(start);

        return result;
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.dfs("A")); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(graph.dfs("C")); // [ 'C', 'A', 'B', 'D', 'E', 'F' ]
console.log(graph.dfs("E")); // [ 'E', 'C', 'A', 'B', 'D', 'F' ]
console.log(graph.dfs("F")); // [ 'F', 'D', 'B', 'A', 'C', 'E' ]
console.log(graph.dfs("B")); // [ 'B', 'A', 'C', 'E', 'D', 'F' ]
console.log(graph.dfs("D")); // [ 'D', 'B', 'A', 'C', 'E', 'F' ]
console.log(graph.dfs("G")); // []
console.log(graph.dfs("H")); // []

// Time Complexity: O(V + E)
// Space Complexity: O(V)