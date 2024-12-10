function depthFirstSearch(graph, startNode, targetNode) {
    let stack = [startNode];
    let visited = new Set();
    let pathTo = new Map();

    while (stack.length > 0) {
        let currentNode = stack.pop();

        if (currentNode === targetNode) {
            let path = [];
            while (currentNode !== startNode) {
                path.unshift(currentNode);
                currentNode = pathTo.get(currentNode);
            }
            path.unshift(startNode);
            return path;
        }

        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            for (let neighbor of graph[currentNode]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                    if (!pathTo.has(neighbor)) {
                        pathTo.set(neighbor, currentNode);
                    }
                }
            }
        }
    }

    return [];
}
module.exports = depthFirstSearch;
