

Date.prototype.nextDay = function (){
    let today=this.getDate()
    let tomorrow = new Date();
    tomorrow.setDate(today+1);
    return tomorrow;
}

var date = new Date(); 

console.log(date);
console.log(date.nextDay())
