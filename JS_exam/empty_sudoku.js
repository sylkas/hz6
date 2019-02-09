const sudoku = [
    {x:1, y:1, s:1, value: null}, {x:1, y:2, s:1, value: null}, {x:1, y:3, s:1, value: null}, 
    {x:1, y:4, s:2, value: null}, {x:1, y:5, s:2, value: null}, {x:1, y:6, s:2, value: null},
    {x:1, y:7, s:3, value: null}, {x:1, y:8, s:3, value: null}, {x:1, y:9, s:3, value: null},

    {x:2, y:1, s:1, value: null}, {x:2, y:2, s:1, value: null}, {x:2, y:3, s:1, value: null},
    {x:2, y:4, s:2, value: null}, {x:2, y:5, s:2, value: null}, {x:2, y:6, s:2, value: null},
    {x:2, y:7, s:3, value: null}, {x:2, y:8, s:3, value: null}, {x:2, y:9, s:3, value: null},

    {x:3, y:1, s:1, value: null}, {x:3, y:2, s:1, value: null}, {x:3, y:3, s:1, value: null},
    {x:3, y:4, s:2, value: null}, {x:3, y:5, s:2, value: null}, {x:3, y:6, s:2, value: null},
    {x:3, y:7, s:3, value: null}, {x:3, y:8, s:3, value: null}, {x:3, y:9, s:3, value: null},


    {x:4, y:1, s:4, value: null}, {x:4, y:2, s:4, value: null}, {x:4, y:3, s:4, value: null},
    {x:4, y:4, s:5, value: null}, {x:4, y:5, s:5, value: null}, {x:4, y:6, s:5, value: null},
    {x:4, y:7, s:6, value: null}, {x:4, y:8, s:6, value: null}, {x:4, y:9, s:6, value: null},

    {x:5, y:1, s:4, value: null}, {x:5, y:2, s:4, value: null}, {x:5, y:3, s:4, value: null},
    {x:5, y:4, s:5, value: null}, {x:5, y:5, s:5, value: null}, {x:5, y:6, s:5, value: null},
    {x:5, y:7, s:6, value: null}, {x:5, y:8, s:6, value: null}, {x:5, y:9, s:6, value: null},

    {x:6, y:1, s:4, value: null}, {x:6, y:2, s:4, value: null}, {x:6, y:3, s:4, value: null},
    {x:6, y:4, s:5, value: null}, {x:6, y:5, s:5, value: null}, {x:6, y:6, s:5, value: null},
    {x:6, y:7, s:6, value: null}, {x:6, y:8, s:6, value: null}, {x:6, y:9, s:6, value: null},

    
    {x:7, y:1, s:7, value: null}, {x:7, y:2, s:7, value: null}, {x:7, y:3, s:7, value: null},
    {x:7, y:4, s:8, value: null}, {x:7, y:5, s:8, value: null}, {x:7, y:6, s:8, value: null},
    {x:7, y:7, s:9, value: null}, {x:7, y:8, s:9, value: null}, {x:7, y:9, s:9, value: null},

    {x:8, y:1, s:7, value: null}, {x:8, y:2, s:7, value: null}, {x:8, y:3, s:7, value: null},
    {x:8, y:4, s:8, value: null}, {x:8, y:5, s:8, value: null}, {x:8, y:6, s:8, value: null},
    {x:8, y:7, s:9, value: null}, {x:8, y:8, s:9, value: null}, {x:8, y:9, s:9, value: null},

    {x:9, y:1, s:7, value: null}, {x:9, y:2, s:7, value: null}, {x:9, y:3, s:7, value: null},
    {x:9, y:4, s:8, value: null}, {x:9, y:5, s:8, value: null}, {x:9, y:6, s:8, value: null},
    {x:9, y:7, s:9, value: null}, {x:9, y:8, s:9, value: null}, {x:9, y:9, s:9, value: null}
];

const sudoku2 = [
    {x:1, y:1, s:1, value: 4}, {x:1, y:2, s:1, value: null}, {x:1, y:3, s:1, value: null}, 
    {x:1, y:4, s:2, value: null}, {x:1, y:5, s:2, value: 9}, {x:1, y:6, s:2, value: 3},
    {x:1, y:7, s:3, value: 6}, {x:1, y:8, s:3, value: 7}, {x:1, y:9, s:3, value: 5},

    {x:2, y:1, s:1, value: null}, {x:2, y:2, s:1, value: null}, {x:2, y:3, s:1, value: 1},
    {x:2, y:4, s:2, value: null}, {x:2, y:5, s:2, value: null}, {x:2, y:6, s:2, value: null},
    {x:2, y:7, s:3, value: null}, {x:2, y:8, s:3, value: 9}, {x:2, y:9, s:3, value: null},

    {x:3, y:1, s:1, value: 7}, {x:3, y:2, s:1, value: null}, {x:3, y:3, s:1, value: null},
    {x:3, y:4, s:2, value: null}, {x:3, y:5, s:2, value: 4}, {x:3, y:6, s:2, value: 8},
    {x:3, y:7, s:3, value: null}, {x:3, y:8, s:3, value: null}, {x:3, y:9, s:3, value: 1},


    {x:4, y:1, s:4, value: null}, {x:4, y:2, s:4, value: null}, {x:4, y:3, s:4, value: null},
    {x:4, y:4, s:5, value: null}, {x:4, y:5, s:5, value: null}, {x:4, y:6, s:5, value: null},
    {x:4, y:7, s:6, value: 1}, {x:4, y:8, s:6, value: 6}, {x:4, y:9, s:6, value: null},

    {x:5, y:1, s:4, value: 1}, {x:5, y:2, s:4, value: 5}, {x:5, y:3, s:4, value: 8},
    {x:5, y:4, s:5, value: null}, {x:5, y:5, s:5, value: null}, {x:5, y:6, s:5, value: null},
    {x:5, y:7, s:6, value: null}, {x:5, y:8, s:6, value: null}, {x:5, y:9, s:6, value: null},

    {x:6, y:1, s:4, value: 3}, {x:6, y:2, s:4, value: 6}, {x:6, y:3, s:4, value: 9},
    {x:6, y:4, s:5, value: null}, {x:6, y:5, s:5, value: null}, {x:6, y:6, s:5, value: 2},
    {x:6, y:7, s:6, value: 8}, {x:6, y:8, s:6, value: null}, {x:6, y:9, s:6, value: null},

    
    {x:7, y:1, s:7, value: null}, {x:7, y:2, s:7, value: null}, {x:7, y:3, s:7, value: 4},
    {x:7, y:4, s:8, value: null}, {x:7, y:5, s:8, value: null}, {x:7, y:6, s:8, value: 1},
    {x:7, y:7, s:9, value: 5}, {x:7, y:8, s:9, value: 8}, {x:7, y:9, s:9, value: null},

    {x:8, y:1, s:7, value: null}, {x:8, y:2, s:7, value: 2}, {x:8, y:3, s:7, value: null},
    {x:8, y:4, s:8, value: null}, {x:8, y:5, s:8, value: null}, {x:8, y:6, s:8, value: 5},
    {x:8, y:7, s:9, value: 7}, {x:8, y:8, s:9, value: null}, {x:8, y:9, s:9, value: 6},

    {x:9, y:1, s:7, value: 8}, {x:9, y:2, s:7, value: null}, {x:9, y:3, s:7, value: null},
    {x:9, y:4, s:8, value: null}, {x:9, y:5, s:8, value: null}, {x:9, y:6, s:8, value: 7},
    {x:9, y:7, s:9, value: null}, {x:9, y:8, s:9, value: 4}, {x:9, y:9, s:9, value: 9}
];