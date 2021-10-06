

const randFloat=function (min,max) {
    let dif=max-min;
    let num=Math.random()*dif;
    let newRandom=min+num;
    return newRandom;

}

console.log(randFloat(12,20));