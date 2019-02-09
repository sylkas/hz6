const deck =
[
    {colour: 'pik',value: '2',i: '12'},
    {colour: 'pik',value: '3',i: '11'},
    {colour: 'pik',value: '4',i: '10'},
    {colour: 'pik',value: '5',i: '09'},
    {colour: 'pik',value: '6',i: '08'},
    {colour: 'pik',value: '7',i: '07'},
    {colour: 'pik',value: '8',i: '06'},
    {colour: 'pik',value: '9',i: '05'},
    {colour: 'pik',value: '10',i: '04'},
    {colour: 'pik',value: 'J',i: '03'},
    {colour: 'pik',value: 'D',i: '02'},
    {colour: 'pik',value: 'K',i: '01'},
    {colour: 'pik',value: 'A',i: '00'},

    {colour: 'kier',value: '2',i: '12'},
    {colour: 'kier',value: '3',i: '11'},
    {colour: 'kier',value: '4',i: '10'},
    {colour: 'kier',value: '5',i: '09'},
    {colour: 'kier',value: '6',i: '08'},
    {colour: 'kier',value: '7',i: '07'},
    {colour: 'kier',value: '8',i: '06'},
    {colour: 'kier',value: '9',i: '05'},
    {colour: 'kier',value: '10',i: '04'},
    {colour: 'kier',value: 'J',i: '03'},
    {colour: 'kier',value: 'D',i: '02'},
    {colour: 'kier',value: 'K',i: '01'},
    {colour: 'kier',value: 'A',i: '00'},

    {colour: 'karo',value: '2',i: '12'},
    {colour: 'karo',value: '3',i: '11'},
    {colour: 'karo',value: '4',i: '10'},
    {colour: 'karo',value: '5',i: '09'},
    {colour: 'karo',value: '6',i: '08'},
    {colour: 'karo',value: '7',i: '07'},
    {colour: 'karo',value: '8',i: '06'},
    {colour: 'karo',value: '9',i: '05'},
    {colour: 'karo',value: '10',i: '04'},
    {colour: 'karo',value: 'J',i: '03'},
    {colour: 'karo',value: 'D',i: '02'},
    {colour: 'karo',value: 'K',i: '01'},
    {colour: 'karo',value: 'A',i: '00'},

    {colour: 'trefl',value: '2',i: '12'},
    {colour: 'trefl',value: '3',i: '11'},
    {colour: 'trefl',value: '4',i: '10'},
    {colour: 'trefl',value: '5',i: '09'},
    {colour: 'trefl',value: '6',i: '08'},
    {colour: 'trefl',value: '7',i: '07'},
    {colour: 'trefl',value: '8',i: '06'},
    {colour: 'trefl',value: '9',i: '05'},
    {colour: 'trefl',value: '10',i: '04'},
    {colour: 'trefl',value: 'J',i: '03'},
    {colour: 'trefl',value: 'D',i: '02'},
    {colour: 'trefl',value: 'K',i: '01'},
    {colour: 'trefl',value: 'A',i: '00'},

];


let game = deck;
getRandomIndex = arrayLength => {
    return(Math.floor(Math.random() * arrayLength));
};

showCards = cardsArray => {
    cardsArray.map(p => p.value + ' ' + p.colour)
            .forEach(p => console.log(p));

}

getDistribution = d => {
    let dist = [];
    let ind;
    let a = [];
    for (let i = 0; i < 5; i++){
        ind = getRandomIndex(d.length);
        a = d.splice(ind,1)
        dist = dist.concat(a);
        //showCards(a);
    }
    return dist;
}

getHighCard = p => {
    //let a  = p.map(k => k.value);
    let a  = p.map(k => k.i);
    a.sort();
    return  p.filter(p => p.i === a[0]);       
}

ifRoyalFlush = p => {
    const result = false;
    let a = p.map(k => k.colour)
    .filter((value, index, self) => self.indexOf(value) === index);
    if (a.length === 1) {
        let a  = p.map(k => k.i);
        a.sort();
        if(a[0] === '00' && a[4] === '04') result = true;
    }
    return result;
}

ifStraightFlush = p => {
    const result = false;
    let a = p.map(k => k.colour)
    .filter((value, index, self) => self.indexOf(value) === index);
    if (a.length === 1) {
        let a  = p.map(k => k.i);
        a.sort();
        if( parseInt( a[a.length-1] ) - parseInt( a[0] ) === 4 ) result = true;
    }
    return result;
}



let distribution = getDistribution(game);

showCards(distribution);
const dis = getHighCard(distribution);
console.log(JSON.stringify(dis));
//showCards(dis);
console.log(ifRoyalFlush(distribution));
console.log(ifStraightFlush(distribution));
// let r = getHighCard(distribution);
// console.log(JSON.stringify(r));

