function monthString(input){
    let nextMonth = {January:'February', 
                    February:'March', 
                    March:'April', 
                    April:'May', 
                    May:'June', 
                    June:'July', 
                    July:'August', 
                    August:'September', 
                    September:'October',
                    October:'November',
                    November:'December', 
                    December: 'January'};

    let monthsArray = input.split(' ');
    let n=monthsArray.length
    let last=monthsArray[(n/2)-1];
    
    let reg=new RegExp(last,"g")
    let output= input.replace(reg, last+" "+nextMonth[last]);
    
    
    
    return output;
}

console.log(monthString("January February January February"))