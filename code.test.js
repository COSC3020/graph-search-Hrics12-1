const depthFirstSearch = require('./code.js'); 

test('Test depthFirstSearch function', () => {
    let graph = {
        'A': ['B', 'C'],
        'B': ['A', 'D', 'E'],
        'C': ['A', 'F'],
        'D': ['B'],
        'E': ['B', 'F'],
        'F': ['C', 'E'],
    };

    expect(depthFirstSearch(graph, 'A', 'F')).toEqual(['A', 'C', 'F']);
    expect(depthFirstSearch(graph, 'A', 'A')).toEqual(['A']);
    expect(depthFirstSearch(graph, 'A', 'G')).toEqual([]);
});
