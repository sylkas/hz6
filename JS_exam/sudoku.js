

const sudoku = [
    {x:1, y:1, s:1, value: 7}, {x:1, y:2, s:1, value: null}, {x:1, y:3, s:1, value: 4}, 
    {x:1, y:4, s:2, value: 8}, {x:1, y:5, s:2, value: null}, {x:1, y:6, s:2, value: null},
    {x:1, y:7, s:3, value: 3}, {x:1, y:8, s:3, value: null}, {x:1, y:9, s:3, value: 1},

    {x:2, y:1, s:1, value: 8}, {x:2, y:2, s:1, value: 2}, {x:2, y:3, s:1, value: null},
    {x:2, y:4, s:2, value: 5}, {x:2, y:5, s:2, value: null}, {x:2, y:6, s:2, value: null},
    {x:2, y:7, s:3, value: null}, {x:2, y:8, s:3, value: 4}, {x:2, y:9, s:3, value: null},

    {x:3, y:1, s:1, value: null}, {x:3, y:2, s:1, value: null}, {x:3, y:3, s:1, value: 9},
    {x:3, y:4, s:2, value: 4}, {x:3, y:5, s:2, value: 3}, {x:3, y:6, s:2, value: null},
    {x:3, y:7, s:3, value: 5}, {x:3, y:8, s:3, value: null}, {x:3, y:9, s:3, value: null},


    {x:4, y:1, s:4, value: 3}, {x:4, y:2, s:4, value: 1}, {x:4, y:3, s:4, value: null},
    {x:4, y:4, s:5, value: null}, {x:4, y:5, s:5, value: null}, {x:4, y:6, s:5, value: null},
    {x:4, y:7, s:6, value: 8}, {x:4, y:8, s:6, value: null}, {x:4, y:9, s:6, value: 7},

    {x:5, y:1, s:4, value: null}, {x:5, y:2, s:4, value: 8}, {x:5, y:3, s:4, value: null},
    {x:5, y:4, s:5, value: null}, {x:5, y:5, s:5, value: null}, {x:5, y:6, s:5, value: null},
    {x:5, y:7, s:6, value: null}, {x:5, y:8, s:6, value: 1}, {x:5, y:9, s:6, value: null},

    {x:6, y:1, s:4, value: 9}, {x:6, y:2, s:4, value: null}, {x:6, y:3, s:4, value: 7},
    {x:6, y:4, s:5, value: null}, {x:6, y:5, s:5, value: null}, {x:6, y:6, s:5, value: null},
    {x:6, y:7, s:6, value: null}, {x:6, y:8, s:6, value: 3}, {x:6, y:9, s:6, value: 2},

    
    {x:7, y:1, s:7, value: null}, {x:7, y:2, s:7, value: null}, {x:7, y:3, s:7, value: 6},
    {x:7, y:4, s:8, value: null}, {x:7, y:5, s:8, value: 1}, {x:7, y:6, s:8, value: 5},
    {x:7, y:7, s:9, value: 4}, {x:7, y:8, s:9, value: null}, {x:7, y:9, s:9, value: null},

    {x:8, y:1, s:7, value: null}, {x:8, y:2, s:7, value: 7}, {x:8, y:3, s:7, value: null},
    {x:8, y:4, s:8, value: null}, {x:8, y:5, s:8, value: null}, {x:8, y:6, s:8, value: 9},
    {x:8, y:7, s:9, value: null}, {x:8, y:8, s:9, value: 6}, {x:8, y:9, s:9, value: 5},

    {x:9, y:1, s:7, value: 5}, {x:9, y:2, s:7, value: null}, {x:9, y:3, s:7, value: 8},
    {x:9, y:4, s:8, value: null}, {x:9, y:5, s:8, value: null}, {x:9, y:6, s:8, value: 2},
    {x:9, y:7, s:9, value: 1}, {x:9, y:8, s:9, value: null}, {x:9, y:9, s:9, value: 3}
];


showSudoku = temp => {
    
    for(let i = 1; i <= 9; i++){
        let row = temp.filter(val => val.x === i)
                .map(val => (val.value !== null)  ? val.value : '_') ;
        let line = row.join(' ');
        console.log(line);
    }
}

getNumber = (index, temp) => {
    const toGet = [1,2,3,4,5,6,7,8,9];

    let obj = temp[index];
    let xNr = obj.x;
    let yNr = obj.y;
    let sNr = obj.s;
    let row = sudoku.filter(i => i.x===xNr && i.value !== null)
                    .map(i => i.value);
    for (let i = 0; i < row.length; i++) {
        let ind = toGet.indexOf(row[i]);
        if(ind >= 0) {
            toGet.splice(ind,1);
        }
    }

    let col = sudoku.filter(i => i.y===yNr && i.value !== null)
                    .map(i => i.value);
    for (let i = 0; i < col.length; i++) {
        let ind = toGet.indexOf(col[i]);
        if(ind >= 0) {
            toGet.splice(ind,1);
        }
    }

    let sqr = temp.filter(i => i.s===sNr && i.value !== null)
                    .map(i => i.value);
    for (let i = 0; i < sqr.length; i++) {
        let ind = toGet.indexOf(sqr[i]);
        if(ind >= 0) {
            toGet.splice(ind,1);
        }        
    }
    return toGet;
};



showSudoku(sudoku);


let tmp = sudoku.map(i => i.value);
let idx = tmp.indexOf(null);

while ( idx >= 0) {

    //console.log(idx);

    const gN = getNumber(idx, sudoku);
    if ( gN.length === 1 ){
        let obj = sudoku[idx];
        obj.value = gN[0];
        sudoku[idx] = obj;
    }

    idx = tmp.indexOf(null, idx + 1 );

    if(idx < 0 ) {
        tmp = sudoku.map(i => i.value);
        if(tmp.indexOf(null) >= 0) {
            idx = tmp.indexOf(null); 
        }
    }
}

console.log('____________________________Callculating ...');
showSudoku(sudoku);



