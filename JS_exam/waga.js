
let contener = { 
    balls:
    [
        { name: 'b1', weight: 10 },
        { name: 'b2', weight: 10 },
        { name: 'b3', weight: 10 },
        { name: 'b4', weight: 10 },
        { name: 'b5', weight: 10 },
        { name: 'b6', weight: 10 },
        { name: 'b7', weight: 10 },
        { name: 'b8', weight: 10 }
    ],
    showCont : (obj) => {
        return JSON.stringify(obj);
    },
    showContener : () => {
        balls.forEach(p => console.log(p.name + ' ' + p.weight));
        //return JSON.stringify(obj);
    },
    addWeight : (ar) => {
        showContener();
        let i = Math.floor(Math.random() * ar.length)
        ar[i].weight = ar[i].weight + 10;
        return ar;
    } 
}
  


//contener.showContener();
let a = contener.balls;
a = contener.addWeight(a);
//contener.showContener();

// podział na grupy

function arrrayToGroup(ar, size){
    let tempArray = [];
    for (let i = 0; i < ar.length; i += size) {
        group = ar.slice(i, i + size);
        tempArray.push(group);
    }
    return tempArray;
}
//console.log(arrrayToGroup([1,2,3,4,5,6,7,8], 3)[2]);
//pierwszy podził
var groupsToScale = arrrayToGroup(a,3);

//ważenie
let scale = {
    numberOfTimes : 2,
    weight : function(part1, part2){
        switch(this.numberOfTimes){
            case 2:
                --this.numberOfTimes;
                var w1 = 0, w2 = 0;
                for (let i = 0; i < part1.length; i++) {
                    w1 +=part1[i].weight;
                }
                for (let i = 0; i < part2.length; i++) {
                    w2 += part2[i].weight;
                }
                if (w1 > w2) {
                    return part1;
                } else if (w2 > w1) {
                    return part2;
                } else {
                    return false;
                }
            case 1:
                --this.numberOfTimes;
                if (part1.weight > part2.weight){
                    return part1;
                } else if (part2.weight > part1.weight){
                    return part2;
                } else {
                    return false;
                }             

            case 0: 
                return 'Przekroczony limit użycia'; 
        }
    
    }
}

var result1 = scale.weight(groupsToScale[0], groupsToScale[1]);

if (result1 !== false){

    let result2 = scale.weight(result1[0], result1[1]);
    if (result2 !== false){
        console.log(result2);
    } else {
        console.log(result1[2]);
    }
} else {    
   
    let result2 = scale.weight(groupsToScale[2][0], groupsToScale[2][1]);
    if (result2 !== false){
        console.log(result2);
    } else {
        console.log('Nie znalaziono');
    }
} 


