function remove(array, ...args){
    let remArray = args;
    for (let r of remArray){
        array = array.filter(e => e!= r);
    }
    return array;
}

var ar=[1,2,3,4,5,6,7];


console.log(remove(ar,3,5))