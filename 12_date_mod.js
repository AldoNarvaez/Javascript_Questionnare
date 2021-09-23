function modifyDateObject(name,fun){
    Date.prototype[name] = fun;
}

function myBirthday(month, day){
    return month+" "+day;
}

let date= new Date()

console.log(date)

modifyDateObject("Birthday",myBirthday)

let dif_date=new Date()

console.log(dif_date.Birthday("Sept",26))
