// const a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

// const aCount = new Map([...new Set(a)].map(
//     x => [x, a.filter(y => y === x).length]
// ));

// console.log(aCount.get(5));




 const data = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]

function count(arr) {
  return arr.reduce((prev, curr) => ( prev[curr] = ++prev[curr] || 1, prev ) , {});
}

console.log(count(data));

// const e= data.reduce(function(countMap, word) {countMap[word] = ++countMap[word] || 1; return countMap}, {});

// console.log(e);

