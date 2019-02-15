// const a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

// const aCount = new Map([...new Set(a)].map(
//     x => [x, a.filter(y => y === x).length]
// ));

// console.log(aCount.get(5));




//  const data = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]
// function count(arr) {
//   return arr.reduce((prev, curr) => ( prev[curr] = ++prev[curr] || 1, prev ) , {});
// }
// console.log(count(data));


// const e= data.reduce(function(countMap, word) {countMap[word] = ++countMap[word] || 1; return countMap}, {});

// console.log(e);

Array.prototype.occurrence = function(val) {
  return this.filter(e => e === val).length;
};
const a = [1, 2, 4, 5, 2, 7, 2, 9];
console.log(a.occurrence(2));

Array.prototype.occurrence = function(val) {
  return this.filter(e => e === val).length;
};

getCount = p => {
  let a  = p.map(k => k.value);
}