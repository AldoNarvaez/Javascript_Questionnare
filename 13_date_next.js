

Date.prototype.nextDay = function (){
    let today=this.getDate()
    let tomorrow = new Date(this.setDate(today));
    tomorrow.setDate(today+1);
    return tomorrow;
}

var date = new Date(1995,11,17); 

console.log(date);
console.log(date.nextDay())
