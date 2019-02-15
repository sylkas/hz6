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

getRandomIndex = arrayLength => {
    return(Math.floor(Math.random() * arrayLength));
};

getDistribution = d => {
    let dist = [];
    let ind;
    let a = [];
    for (let i = 0; i < 5; i++){
        ind = getRandomIndex(d.length);
        a = d.splice(ind,1)
        dist = dist.concat(a);
    }
    return dist;
}

showCards = cardsArray => {
    cardsArray.map(p => p.value + ' ' + p.colour)
            .forEach(p => console.log(p));
}

ifColour = p => {
    let result = false;
    let a = p.map(k => k.colour)
    .filter((value, index, self) => self.indexOf(value) === index);
    if(a.length === 1) result = true;
    return result;
}

getCountGroup = p => {
    let count = [];
    let a = p.map(k => k.value)
            .filter((value, index, self) => self.indexOf(value) === index);
    for(let i = 0; i< a.length; i++){
        count.push( p.filter( e => e.value === a[i] ).length );
    }
    return count;
}

ifRoyalFlush = p => {
    let result = false;
    const countGroup = getCountGroup(p);
    if ( ifColour(p) ) {
        let a  = p.map(k => k.i);
        a.sort();
        if( a[0] === '00' && a[4] === '04' && countGroup.length === 5) result = true;
    }
    return result;
}

ifStraightFlush = p => {
    let result = false;
    const countGroup = getCountGroup(p);
    if ( ifColour(p) ) {
        let a  = p.map(k => k.i);
        a.sort();
        if( (parseInt( a[a.length-1] ) - parseInt( a[0] ) === 4) && a[0] !== '00' && countGroup.length === 5 ) 
            result = true;
    }
    return result;
}

ifFourOfKind = p => {
    let result = false;
    const countGroup = getCountGroup(p);
    if( countGroup.indexOf(4) >= 0 ) result = true;
    return result;
} 

ifFullHouse = p => {
    let result = false;
    const countGroup = getCountGroup(p); 
    if( countGroup.indexOf(3) >= 0 && countGroup.indexOf(2) >= 0) result = true;
    return result;
}

ifFlush = p => {
    let result = false;
    if ( ifColour(p) ) {
        let a  = p.map(k => k.i);
        a.sort();
        if( parseInt( a[a.length-1] ) - parseInt( a[0] ) >= 8 ) result = true;       
    }
    return result;
}

ifStraight = p => {
    let result = false;
    const countGroup = getCountGroup(p);
    if ( ifColour(p) === false ) {
        let a  = p.map(k => k.i);
        a.sort();
        if( ( parseInt( a[a.length-1] ) - parseInt( a[0] ) === 4 ) &&  countGroup.length === 5 ) result = true;            
    }
    return result;
}

ifThreeOfKind = p => {
    let result = false;
    const countGroup = getCountGroup(p);
    if( countGroup.indexOf(3) >= 0 && countGroup.indexOf(2) < 0) result = true;
    return result;    
}

ifTwoPair = p => {
    let result = false;
    const countGroup = getCountGroup(p);
    const idx = countGroup.indexOf(2);
    if( idx >= 0 && countGroup.indexOf(2, idx+1) >= 0) result = true;
    return result;   
}

ifOnePair = p => {
    let result = false;
    const countGroup = getCountGroup(p);
    const idx = countGroup.indexOf(2);
    if( idx >= 0 && countGroup.indexOf(2, idx+1) < 0) result = true;
    return result;      
}

getHighCard = p => {
    let result;
    let a  = p.map(k => k.i);
    a.sort();
    result = p.filter(p => p.i === a[0]);
    return  result[0].value;       
}

let distribution = getDistribution(deck);

showCards(distribution);

if(ifRoyalFlush(distribution)) {
    console.log("RoyalFlush");
} else if(ifStraightFlush(distribution)) {
    console.log("StraightFlush");
} else if(ifFourOfKind(distribution)) {
    console.log("FourOfKind"); 
} else if(ifFullHouse(distribution)) {
    console.log("FullHouse");     
} else if(ifFlush(distribution)) {
    console.log("Flush"); 
} else if(ifStraight(distribution)) {
    console.log("Straight");  
} else if(ifThreeOfKind(distribution)) {
    console.log("ThreeOfKind");   
} else if(ifTwoPair(distribution)) {
    console.log("TwoPair"); 
} else if(ifOnePair(distribution)) {
    console.log("OnePair");            
} else {
    console.log("HighCard " + getHighCard(distribution));
};



