
let random = randi(15,20);

function randi(min,max){
    let posibleNumbers = [];
    for (let i = min; i<=max; i++){
        posibleNumbers.push(i);
    }

    function takeNumber(){
        let n = posibleNumbers.length;
        if (n == 0){
            return "No posible Numbers available"
        }
        let i = Math.floor(Math.random()*n);
        let result = posibleNumbers[i];
        posibleNumbers.splice(i, 1);

        return result;
    }
        return takeNumber;
 }

console.log(random())
console.log(random())
console.log(random())
console.log(random())
console.log(random())
console.log(random())
console.log(random())
console.log(random())
